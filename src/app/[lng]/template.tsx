'use client';
import useDisableScrollBounce from '@/hooks/useDisableScrollBounce';
import { useEasterEgg } from '@/hooks/useEasterEgg';
import useListenMessageToReactNative from '@/hooks/useListenMessageToReactNative';
import { useSentry } from '@/hooks/useSentry';

export default function Template({ children }: { children: React.ReactNode }) {
  useEasterEgg();
  useDisableScrollBounce();
  useSentry();
  useListenMessageToReactNative();

  return children;
}
