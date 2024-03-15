import createBundleAnalyzer from '@next/bundle-analyzer';
import withPlaiceholder from '@plaiceholder/next';
import { withSentryConfig } from '@sentry/nextjs';

const withBundleAnalyzer = createBundleAnalyzer({
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
      {
        protocol: 'https',
        hostname: 'opendata.mofa.go.kr',
      },
    ],
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
  org: 'gloddy',
  project: 'javascript-nextjs',
};

export default withBundleAnalyzer(
  withPlaiceholder(withSentryConfig(nextConfig, sentryWebpackPluginOptions))
);
