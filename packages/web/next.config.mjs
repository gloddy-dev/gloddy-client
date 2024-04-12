import createBundleAnalyzer from '@next/bundle-analyzer';
import withPlaiceholder from '@plaiceholder/next';

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: fileLoaderRule.issuer,
      resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
      use: ['@svgr/webpack'],
    });
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
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
    deviceSizes: [450],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 450],
    minimumCacheTTL: 6000,
    formats: ['image/webp'],
  },
};

export default withBundleAnalyzer(withPlaiceholder(nextConfig));
