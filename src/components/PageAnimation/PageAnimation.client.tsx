'use client';
import { fadeInVariants } from '@/constants/motions';
import cn from '@/utils/cn';
import { type AnimationProps, motion } from 'framer-motion';

import type { StrictPropsWithChildren } from '@/types';

interface PageAnimationProps extends AnimationProps {
  className?: string;
}

export default function PageAnimation({
  children,
  className,
  ...props
}: StrictPropsWithChildren<PageAnimationProps>) {
  return (
    <motion.div {...fadeInVariants()} className={cn('flex-grow', className)} {...props}>
      {children}
    </motion.div>
  );
}
