'use client';
import useDisableScrollBounce from '@/hooks/useDisableScrollBounce';
import useListenMessageToReactNative from '@/hooks/useListenMessageToReactNative';
import { useSentry } from '@/hooks/useSentry';

export default function Template({ children }: { children: React.ReactNode }) {
  useDisableScrollBounce();
  useSentry();
  useListenMessageToReactNative();

  return children;
}
