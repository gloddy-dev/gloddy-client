const { withSentryConfig } = require('@sentry/nextjs');

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

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
