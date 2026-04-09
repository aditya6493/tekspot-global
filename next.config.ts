import type { NextConfig } from "next";

/** Fetches media for `<video src="/videos/...">`; keep HTTP here — the browser only sees your HTTPS origin. */
const videoUpstream =
  process.env.VIDEO_UPSTREAM_URL ?? "http://15.206.123.194:8081";

const nextConfig: NextConfig = {
  async rewrites() {
    const base = videoUpstream.replace(/\/$/, "");
    return [
      {
        source: "/videos/:path*",
        destination: `${base}/videos/:path*`,
      },
    ];
  },
};

export default nextConfig;
