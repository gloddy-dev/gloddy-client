'use client';
import { type AnimationProps, motion } from 'framer-motion';

import type { StrictPropsWithChildren } from '@/types';

export default function PageAnimation({
  children,
  ...props
}: StrictPropsWithChildren<AnimationProps>) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} {...props}>
      {children}
    </motion.div>
  );
}
