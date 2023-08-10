const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {};

const sentryWebpackPluginOptions = {
  silent: true,
  org: 'gloddy',
  project: 'javascript-nextjs',
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
