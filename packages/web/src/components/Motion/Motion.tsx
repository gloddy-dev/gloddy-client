import { LazyMotion, domMax } from 'framer-motion';
import React from 'react';

import { StrictPropsWithChildren } from '@/types';

export default function Motion({ children }: StrictPropsWithChildren) {
  return (
    <LazyMotion features={domMax} strict>
      {children}
    </LazyMotion>
  );
}
