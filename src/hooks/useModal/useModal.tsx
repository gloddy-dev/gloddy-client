'use client';
import { useModalContext } from './ModalProvider';
import { useDidUnMount } from '../common/useDidUnMount';
import { ReactElement, useState } from 'react';

let elementId = 1;

interface UseModalProps {
  delay?: number;
}

export default function useModal({ delay }: UseModalProps = {}) {
  const { mount, unmount } = useModalContext();

  const [id] = useState(() => String(elementId++));

  useDidUnMount(() => unmount(id));

  return {
    open: (modalElement: ReactElement) => {
      mount(id, modalElement);
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
