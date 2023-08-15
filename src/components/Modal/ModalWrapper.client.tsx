'use client';
import { PortalWrapper } from '../PotalWrapper';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import type { StrictPropsWithChildren } from '@/types';

interface ModalWrapperProps {
  isOpen: boolean;
  onClose?: () => void;
}

export default function ModalWrapper({
  isOpen,
  onClose = () => {},
  children,
}: StrictPropsWithChildren<ModalWrapperProps>) {
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, onClose);

  return (
    <PortalWrapper isShow={isOpen}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed left-1/2 top-0 z-10 h-full w-full max-w-450 -translate-x-1/2 bg-[rgba(0,0,0,0.4)]"
      >
        <div ref={modalRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
      </motion.div>
    </PortalWrapper>
  );
}
