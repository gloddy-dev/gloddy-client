'use client';

import React, {
  PropsWithChildren,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export const ModalContext = createContext<{
  mount(id: string, element: ReactNode): void;
  unmount(id: string): void;
} | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context == null) {
    throw new Error('useModal is only available within ModalProvider.');
  }

  return context;
};

export default function ModalProvider({ children }: PropsWithChildren) {
  const [modalById, setModalById] = useState<Map<string, ReactNode>>(new Map());

  const mount = useCallback((id: string, element: ReactNode) => {
    setModalById((modalById) => {
      const cloned = new Map(modalById);
      cloned.set(id, element);
      return cloned;
    });
  }, []);

  const unmount = useCallback((id: string) => {
    setModalById((modalById) => {
      const cloned = new Map(modalById);
      cloned.delete(id);
      return cloned;
    });
  }, []);
  const context = { mount, unmount };

  return (
    <ModalContext.Provider value={context}>
      {children}
      {Array.from(modalById.entries()).map(([id, element]) => (
        <React.Fragment key={id}>{element}</React.Fragment>
      ))}
    </ModalContext.Provider>
  );
}
