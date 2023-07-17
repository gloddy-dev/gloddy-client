import { HTMLMotionProps, motion } from 'framer-motion';
import React, { forwardRef, useMemo } from 'react';

interface PageTransitionProps extends HTMLMotionProps<'div'> {
  isStartLeft?: boolean;
}
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>;

function PageTransition(
  { isStartLeft = true, children, ...rest }: PageTransitionProps,
  ref: PageTransitionRef
) {
  const startPosition = isStartLeft ? { x: '-100%' } : { x: '100%' };
  const middlePosition = { x: 0 };
  const endPosition = isStartLeft ? { x: '100%' } : { x: '-100%' };

  const transition = { duration: 0.5, ease: 'easeInOut' };

  return (
    <motion.div
      ref={ref}
      initial={startPosition}
      animate={middlePosition}
      exit={endPosition}
      transition={transition}
      {...rest}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export default forwardRef(PageTransition);
