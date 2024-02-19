'use client';
import {
  useDisableScrollBounce,
  useEasterEgg,
  useListenMessageToReactNative,
  useSentry,
} from '@/hooks';

export default function Template({ children }: { children: React.ReactNode }) {
  useEasterEgg();
  useDisableScrollBounce();
  useSentry();
  useListenMessageToReactNative();

  return children;
}
