'use client';
import { fadeInVariants } from '@/constants/motions';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import cn from '@/utils/cn';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import type { StrictPropsWithChildren } from '@/types';

interface ModalWrapperProps {
  onClose?: () => void;
  className?: string;
  layerNumber?: number;
}

export default function ModalWrapper({
  onClose = () => {},
  className,
  children,
  layerNumber = 0,
}: StrictPropsWithChildren<ModalWrapperProps>) {
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, onClose);

  return (
    <motion.div
      {...fadeInVariants()}
      className="fixed left-1/2 top-0 h-full w-full max-w-450 -translate-x-1/2 bg-[rgba(0,0,0,0.4)]"
      style={{ zIndex: 10000000 + layerNumber * 10 }}
    >
      <div
        ref={modalRef}
        className={cn('absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2', className)}
      >
        {children}
      </div>
    </motion.div>
  );
}
