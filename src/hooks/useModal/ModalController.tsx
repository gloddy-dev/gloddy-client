'use client';
import { Ref, forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';

import type { ModalElementType } from './type';

interface ModalControllerProps {
  modalElement: ModalElementType;
  onExit: () => void;
}

export interface ModalControlRef {
  close: () => void;
}

export default forwardRef(function ModalController(
  { modalElement: ModalElement, onExit }: ModalControllerProps,
  ref: Ref<ModalControlRef>
) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(
    ref,
    () => {
      return { close: handleClose };
    },
    [handleClose]
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsOpen(true);
    });
  }, []);

  return <ModalElement isOpen={isOpen} close={handleClose} exit={onExit} />;
});
