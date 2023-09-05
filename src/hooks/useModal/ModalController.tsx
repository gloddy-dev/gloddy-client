import { Ref, forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';

import type { CreateModalElement } from './type';

interface Props {
  modalElement: CreateModalElement;
  onExit: () => void;
}

export interface ModalControlRef {
  close: () => void;
}

export const ModalController = forwardRef(function ModalController(
  { modalElement: ModalElement, onExit }: Props,
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
