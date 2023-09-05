'use client';
import { ModalControlRef, ModalController } from './ModalController';
import { ModalContext } from './ModalProvider';
import { CreateModalElement } from './type';
import { useContext, useMemo, useRef, useState } from 'react';

let elementId = 1;

interface UseModalProps {
  delay?: number;
}

export default function useModal({ delay = 0 }: UseModalProps = {}) {
  const context = useContext(ModalContext);

  if (context === null) throw new Error('useModal is only available within ModalProvider.');

  const { addModal, removeModal } = context;

  const [id] = useState(() => String(elementId++));

  const modalRef = useRef<ModalControlRef | null>(null);

  return useMemo(
    () => ({
      open: (modalElement: CreateModalElement) => {
        addModal(
          id,
          <ModalController
            key={Date.now()}
            ref={modalRef}
            modalElement={modalElement}
            onExit={() => {
              removeModal(id);
            }}
          />
        );
        if (delay) {
          setTimeout(() => {
            removeModal(id);
          }, delay);
        }
      },
      close: () => {
        modalRef.current?.close();
      },
      exit: () => {
        removeModal(id);
      },
    }),
    [addModal, id, delay, removeModal]
  );
}
