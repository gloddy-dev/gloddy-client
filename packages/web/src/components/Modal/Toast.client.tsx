'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import { fadeInVariants } from '@/constants/motions';
import { StrictPropsWithChildren } from '@/types';

export default function Toast({ children }: StrictPropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      {...fadeInVariants()}
      className="z-modal max-w-340 rounded-4 text-paragraph-2 fixed inset-x-0 bottom-40 mx-auto inline-flex justify-center bg-zinc-900 bg-opacity-80 px-16 py-12 text-center text-white"
      ref={ref}
    >
      {children}
    </motion.div>
  );
}
