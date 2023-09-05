'use client';
import { useModalContext } from './ModalProvider';
import { ReactElement, useState } from 'react';

let elementId = 1;

interface UseModalProps {
  delay?: number;
}

export default function useModal({ delay = 0 }: UseModalProps = {}) {
  const { addModal, removeModal } = useModalContext();

  const [id] = useState(() => String(elementId++));

  return {
    open: (modalElement: ReactElement) => {
      addModal(id, modalElement);
      if (delay) {
        setTimeout(() => {
          removeModal(id);
        }, delay);
      }
    },
    close: () => {
      removeModal(id);
    },
  };
}
