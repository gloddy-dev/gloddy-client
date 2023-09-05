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
            // NOTE: state should be reset every time we open an modal
            key={Date.now()}
            ref={modalRef}
            modalElement={modalElement}
            onExit={() => {
              removeModal(id);
            }}
          />
        );
      },
      close: () => {
        modalRef.current?.close();
      },
      exit: () => {
        removeModal(id);
      },
    }),
    [id, addModal, removeModal]
  );
}
