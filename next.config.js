const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placehold.co"],
  },
  env: {
    NEXT_PUBLIC_ENV: "PRODUCTION", //your next configs goes here
  },
};

module.exports = nextConfig;
