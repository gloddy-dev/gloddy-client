'use client';
import ModalController, { ModalControlRef } from './ModalController';
import { ModalContext } from './ModalProvider';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';

import type { ModalElementType } from './type';

let elementId = 1;

interface UseModalProps {
  exitOnUnmount?: boolean;
  delay?: number;
}

export default function useModal({ exitOnUnmount = true, delay }: UseModalProps = {}) {
  const context = useContext(ModalContext);

  if (context == null) {
    throw new Error('useModal is only available within ModalProvider.');
  }

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
