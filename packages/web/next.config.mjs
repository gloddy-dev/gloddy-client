import withPlaiceholder from '@plaiceholder/next';
import { withSentryConfig } from '@sentry/nextjs';

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
  experimental: {
    externalDir: true,
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
  org: 'gloddy',
  project: 'javascript-nextjs',
};

export default withPlaiceholder(withSentryConfig(nextConfig, sentryWebpackPluginOptions));
