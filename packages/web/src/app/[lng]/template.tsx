'use client';
import useDisableScrollBounce from '@/hooks/useDisableScrollBounce';
import useListenMessageToReactNative from '@/hooks/useListenMessageToReactNative';

export default function Template({ children }: { children: React.ReactNode }) {
  useDisableScrollBounce();
  useListenMessageToReactNative();

  return children;
}
