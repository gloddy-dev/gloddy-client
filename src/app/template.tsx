'use client';
import { useEasterEgg } from '@/hooks/useEasterEgg';

export default function Step4Layout({ children }: { children: React.ReactNode }) {
  useEasterEgg();

  return children;
}