import { HTMLMotionProps, motion } from 'framer-motion';
import React, { forwardRef } from 'react';

interface PageTransitionProps extends HTMLMotionProps<'div'> {
  isStartLeft?: boolean;
}

function PageTransition({ isStartLeft = true, children, ...props }: PageTransitionProps) {
  const startPosition = isStartLeft ? { x: '-100%' } : { x: '100%' };
  const middlePosition = { x: 0 };
  const endPosition = isStartLeft ? { x: '100%' } : { x: '-100%' };

  const transition = { duration: 0.5, ease: 'easeInOut' };

  return (
    <motion.div
      initial={startPosition}
      animate={middlePosition}
      exit={endPosition}
      transition={transition}
      {...props}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export default forwardRef(PageTransition);
