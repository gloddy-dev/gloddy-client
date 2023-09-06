'use client';
import { ModalControlRef, ModalController } from './ModalController';
import { ModalContext } from './ModalProvider';
import { CreateModalElement } from './type';
import { useUnmountEffect } from 'framer-motion';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';

let elementId = 1;

interface UseModalProps {
  delay?: number;
  isUnmountExit?: boolean;
}

export default function useModal({ delay = 0, isUnmountExit = true }: UseModalProps = {}) {
  const context = useContext(ModalContext);

  if (context === null) throw new Error('useModal is only available within ModalProvider.');

  const { addModal, removeModal } = context;

  const [id] = useState(() => String(elementId++));

  const modalRef = useRef<ModalControlRef | null>(null);

  useEffect(() => {
    const goBack = () => {
      removeModal(id);
    };
    history.pushState({ page: 'modal' }, document.title);
    window.addEventListener('popstate', goBack);
    return () => {
      window.removeEventListener('popstate', goBack);
      isUnmountExit && removeModal(id);
    };
  }, [id, isUnmountExit, removeModal]);

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
