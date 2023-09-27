'use client';
import { SENTRY_DSN } from '@/constants';
import useDisableScrollBounce from '@/hooks/useDisableScrollBounce';
import { useEasterEgg } from '@/hooks/useEasterEgg';
import { useSentry } from '@/hooks/useSentry';

export default function Step4Layout({ children }: { children: React.ReactNode }) {
  useEasterEgg();
  useDisableScrollBounce();

  useSentry({
    dsn: SENTRY_DSN,
    allowUrls: ['https://gloddy.vercel.app'],
  });

  return children;
}
