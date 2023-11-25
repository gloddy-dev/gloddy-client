'use client';
import { StrictPropsWithChildren } from '@/types';
import { motion } from 'framer-motion';

interface ButtonAnimationProps {
  className?: string;
}

export default function ButtonAnimation({
  children,
  ...props
}: StrictPropsWithChildren<ButtonAnimationProps>) {
  return (
    <motion.div
      {...props}
      whileHover="hover"
      whileTap="pressed"
      variants={{
        hover: (clicked) => ({
          scale: clicked ? 1 : 1.1,
        }),
        pressed: {
          scale: 0.9,
        },
        rest: {
          scale: 1,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
