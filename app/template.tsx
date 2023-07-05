'use client';
import { useEasterEgg } from '@/hooks/useEasterEgg';

export default function Step4Layout({ children }: { children: React.ReactNode }) {
  useEasterEgg();
  return <div className="h-full">{children}</div>;
}
