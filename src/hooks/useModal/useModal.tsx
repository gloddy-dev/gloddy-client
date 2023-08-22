'use client';
import ModalController, { ModalControlRef } from './ModalController';
import { useModalContext } from './ModalProvider';
import { useEffect, useMemo, useRef, useState } from 'react';

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

  const modalRef = useRef<ModalControlRef | null>(null);

  useEffect(() => {
    return () => {
      if (exitOnUnmount) {
        unmount(id);
      }
    };
  }, [exitOnUnmount, id, unmount]);

  return useMemo(
    () => ({
      open: (modalElement: ModalElementType) => {
        mount(
          id,
          <ModalController
            key={Date.now()}
            ref={modalRef}
            modalElement={modalElement}
            onExit={() => {
              unmount(id);
            }}
          />
        );
        if (delay) {
          setTimeout(() => {
            unmount(id);
          }, delay);
        }
      },
      close: () => {
        modalRef.current?.close();
      },
      exit: () => {
        unmount(id);
      },
    }),
    [delay, id, mount, unmount]
  );
}
