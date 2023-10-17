'use client';
import type { StrictPropsWithChildren } from '@/types';

export default function JoinContentTextMessage({ children }: StrictPropsWithChildren) {
  return <p className="text-subtitle-2 text-sign-tertiary">{children}</p>;
}
