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
      whileHover="hover" // hover상태 일 때 hover animation발생
      whileTap="pressed"
      variants={{
        hover: (clicked) => ({
          // 클릭된 버튼은 scale이 커지지 않는다.
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
