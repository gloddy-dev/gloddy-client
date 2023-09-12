'use client';
import useDisableScrollBounce from '@/hooks/useDisableScrollBounce';
import { useEasterEgg } from '@/hooks/useEasterEgg';

export default function Step4Layout({ children }: { children: React.ReactNode }) {
  useEasterEgg();
  useDisableScrollBounce();

  return children;
}
