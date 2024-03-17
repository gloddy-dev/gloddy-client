'use client';
import useListenMessageToReactNative from '@/hooks/useListenMessageToReactNative';

export default function Template({ children }: { children: React.ReactNode }) {
  useListenMessageToReactNative();

  return children;
}
