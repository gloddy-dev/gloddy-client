'use client';
import { m } from 'framer-motion';

import { Motion } from '../Motion';

import { StrictPropsWithChildren } from '@/types';

interface ButtonAnimationProps {
  className?: string;
}

export default function ButtonAnimation({
  children,
  ...props
}: StrictPropsWithChildren<ButtonAnimationProps>) {
  return (
    <Motion>
      <m.div
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
      </m.div>
    </Motion>
  );
}
