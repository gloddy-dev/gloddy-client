'use client';
import type { StrictPropsWithChildren } from '@/types';

export default function JoinTitleTextMessage({ children }: StrictPropsWithChildren) {
  return <div className="pb-16 pt-32 text-h3 text-sign-cto">{children}</div>;
}
