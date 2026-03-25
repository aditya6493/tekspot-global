/* eslint-disable no-console */
const { execSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const https = require("node:https");

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
function isLfsPointerFile(filePath) {
  try {
    const fd = fs.openSync(filePath, "r");
    const buf = Buffer.alloc(64);
    fs.readSync(fd, buf, 0, 64, 0);
    fs.closeSync(fd);
    const start = buf.toString("utf8");
    return start.startsWith("version https://git-lfs.github.com/spec/v1");
  } catch {
    return false;
  }
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const tmpPath = `${destPath}.download`;
    const doRequest = (requestUrl) => {
      const req = https.get(
        requestUrl,
        {
          headers: {
            "User-Agent": "lfs-pull.js",
          },
        },
        (res) => {
          if (
            res.statusCode &&
            res.statusCode >= 300 &&
            res.statusCode < 400 &&
            res.headers.location
          ) {
            // Follow redirects.
            doRequest(res.headers.location);
            return;
          }

          if (!res.statusCode || res.statusCode !== 200) {
            reject(
              new Error(
                `[lfs-pull] Download failed (${res.statusCode}) from ${requestUrl}`,
              ),
            );
            return;
          }

          const file = fs.createWriteStream(tmpPath);
          res.pipe(file);

          file.on("finish", () => {
            file.close(() => {
              fs.renameSync(tmpPath, destPath);
              resolve();
            });
          });
          file.on("error", reject);
        },
      );

      req.on("error", reject);
    };

    doRequest(url);
  });
}

async function main() {
  const repoRoot = process.cwd();
  const gitDir = path.join(repoRoot, ".git");
  const heroVideoPath = path.join(
    repoRoot,
    "public",
    "assets",
    "landing-hero-video.webm",
  );

  // If the deploy step doesn't include `.git` (common in some build pipelines), just skip.
  if (!exists(gitDir)) {
    console.log("[lfs-pull] No .git directory; will rely on pointer check/download.");
  }

  if (!exists(heroVideoPath)) {
    console.log("[lfs-pull] Hero video file not found; skipping.");
    return;
  }

  // If the hero video is already present (not an LFS pointer), do nothing.
  if (!isLfsPointerFile(heroVideoPath)) {
    console.log("[lfs-pull] Hero video appears present; nothing to do.");
    return;
  }

  console.log("[lfs-pull] Hero video is an LFS pointer; attempting to fetch real content.");

  // If `git lfs` isn't available, skip rather than failing the install.
  try {
    execSync("git lfs version", { stdio: "ignore" });
  } catch {
    console.log("[lfs-pull] `git lfs` not available; will try direct download.");
  }

  // Try git lfs pull if possible.
  if (exists(gitDir)) {
    try {
      console.log("[lfs-pull] Pulling LFS objects for `*.webm`...");
      execSync(
        "git lfs pull --include=\"*.webm\" --exclude=\"*\" --quiet",
        { stdio: "inherit" },
      );
    } catch {
      console.log("[lfs-pull] `git lfs pull` failed; will try direct download.");
    }
  }

  // Re-check after git lfs pull.
  if (!isLfsPointerFile(heroVideoPath)) {
    console.log("[lfs-pull] Hero video downloaded via LFS.");
    return;
  }

  // Fallback: download from GitHub's media CDN.
  // This works even when `.git/` is missing (common on production builders).
  const repoSlug = process.env.GITHUB_REPOSITORY || "aditya6493/tekspot-global";
  const branch = process.env.LFS_HERO_VIDEO_BRANCH || "main";
  const [owner, repo] = repoSlug.split("/");
  const heroUrl =
    process.env.LFS_HERO_VIDEO_URL ||
    `https://media.githubusercontent.com/media/${owner}/${repo}/${branch}/public/assets/landing-hero-video.webm`;

  console.log("[lfs-pull] Downloading hero video from:", heroUrl);
  try {
    await downloadFile(heroUrl, heroVideoPath);
    console.log("[lfs-pull] Hero video downloaded successfully.");
  } catch (err) {
    console.log("[lfs-pull] Direct download failed; continuing.");
  }
}

main().catch((err) => {
  console.log("[lfs-pull] Unexpected error; continuing without LFS.");
  console.log(err?.message || String(err));
});

