'use client';
import { useModalContext } from './ModalProvider';
import { useDidMount } from '../common/useDidMount';
import { useEffect, useMemo, useState } from 'react';

import type { ModalElementType } from './type';

let elementId = 1;

interface UseModalProps {
  exitOnUnmount?: boolean;
  delay?: number;
}

export default function useModal({ exitOnUnmount = true, delay }: UseModalProps = {}) {
  const context = useModalContext();
  const { mount, unmount } = context;

  const [id] = useState(() => String(elementId++));

  useEffect(() => {
    return () => {
      if (exitOnUnmount) {
        unmount(id);
      }
    };
  }, [exitOnUnmount, id, unmount]);

  return {
    open: (modalElement: ModalElementType) => {
      mount(id, <ModalController modalElement={modalElement} />);
      if (delay) {
        setTimeout(() => {
          unmount(id);
        }, delay);
      }
    },
    close: () => {
      unmount(id);
    },
  };
}

interface ModalControllerProps {
  modalElement: ModalElementType;
}

function ModalController({ modalElement: ModalElement }: ModalControllerProps) {
  const [isOpen, setIsOpen] = useState(false);

  useDidMount(() => {
    requestAnimationFrame(() => setIsOpen(true));
  });

  return <ModalElement isOpen={isOpen} />;
}
