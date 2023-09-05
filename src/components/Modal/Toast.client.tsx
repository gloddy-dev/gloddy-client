'use client';
import { StrictPropsWithChildren } from '@/types';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Toast({ children }: StrictPropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-x-0 bottom-40 z-modal mx-auto inline-flex max-w-340 justify-center rounded-4 bg-zinc-900 bg-opacity-80 px-16 py-12 text-paragraph-2 text-white"
      ref={ref}
    >
      {children}
    </motion.div>
  );
}
