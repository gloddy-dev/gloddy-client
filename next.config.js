const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
  org: 'gloddy',
  project: 'javascript-nextjs',
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
