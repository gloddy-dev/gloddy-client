'use client';

import { AnimatePresence } from 'framer-motion';
import React, {
  PropsWithChildren,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

export const ModalContext = createContext<{
  addModal(id: string, element: ReactNode): void;
  removeModal(id: string): void;
} | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context == null) {
    throw new Error('useModal is only available within ModalProvider.');
  }

  return context;
};

export default function ModalProvider({ children }: PropsWithChildren) {
  const [modalMap, setModalMap] = useState<Map<string, ReactNode>>(new Map());

  const addModal = useCallback((id: string, element: ReactNode) => {
    setModalMap((prev) => {
      const cloned = new Map(prev);
      cloned.set(id, element);
      return cloned;
    });
  }, []);

  const removeModal = useCallback((id: string) => {
    setModalMap((prev) => {
      const cloned = new Map(prev);
      cloned.delete(id);
      return cloned;
    });
  }, []);

  const context = { addModal, removeModal };

  return (
    <ModalContext.Provider value={context}>
      {children}
      <AnimatePresence>
        {Array.from(modalMap.entries()).map(([id, element]) => (
          <React.Fragment key={id}>{element}</React.Fragment>
        ))}
      </AnimatePresence>
    </ModalContext.Provider>
  );
}
