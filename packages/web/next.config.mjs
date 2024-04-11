import createBundleAnalyzer from '@next/bundle-analyzer';
import withPlaiceholder from '@plaiceholder/next';

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
    deviceSizes: [450],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 450],
    minimumCacheTTL: 31536000,
    formats: ['image/webp'],
  },
};
export default withBundleAnalyzer(withPlaiceholder(nextConfig));
