'use client';
import type { StrictPropsWithChildren } from '@/types';

export default function TitleTextMessage({ children }: StrictPropsWithChildren) {
  return <div className="text-h3 text-sign-cto pb-16 pt-32">{children}</div>;
}
