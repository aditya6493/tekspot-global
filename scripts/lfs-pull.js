/* eslint-disable no-console */
const { execSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

function exists(p) {
  try {
    fs.accessSync(p);
    return true;
  } catch {
    return false;
  }
}

// Runs in CI/deploy environments after `npm install`.
// If the repo was cloned without Git LFS objects, `public/*.webm` will be LFS pointers
// and the hero video will not play. This attempts to fetch only what we need.
function main() {
  const repoRoot = process.cwd();
  const gitDir = path.join(repoRoot, ".git");

  // If the deploy step doesn't include `.git` (common in some build pipelines), just skip.
  if (!exists(gitDir)) {
    console.log("[lfs-pull] No .git directory; skipping.");
    return;
  }

  // If `git lfs` isn't available, skip rather than failing the install.
  try {
    execSync("git lfs version", { stdio: "ignore" });
  } catch {
    console.log("[lfs-pull] `git lfs` not available; skipping.");
    return;
  }

  try {
    console.log("[lfs-pull] Pulling LFS objects for `*.webm`...");
    execSync("git lfs pull --include=\"*.webm\" --exclude=\"*\" --quiet", {
      stdio: "inherit",
    });
  } catch (err) {
    console.log("[lfs-pull] `git lfs pull` failed; continuing without LFS.");
    // Do not throw; a deploy should not fail just because LFS isn't available.
  }
}

main();

