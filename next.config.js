const { withSentryConfig } = require('@sentry/nextjs');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gloddy.s3.ap-northeast-2.amazonaws.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['my-lib'],
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
  org: 'gloddy',
  project: 'javascript-nextjs',
};

module.exports = withBundleAnalyzer(withSentryConfig(nextConfig, sentryWebpackPluginOptions));
