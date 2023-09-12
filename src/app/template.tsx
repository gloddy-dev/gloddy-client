'use client';
import { SENTRY_DSN } from '@/constants';
import { useEasterEgg } from '@/hooks/useEasterEgg';
import { useSentry } from '@/hooks/useSentry';

export default function Step4Layout({ children }: { children: React.ReactNode }) {
  useEasterEgg();

  useSentry({
    dsn: SENTRY_DSN,
    allowUrls: ['https://gloddy.vercel.app'],
  });

  return children;
}
