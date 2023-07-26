import { useModals } from '@/hooks/useModals';
import { StrictPropsWithChildren } from '@/types';
import { createContext, useContext } from 'react';

interface ModalContextProps extends ReturnType<typeof useModals> {}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export default function ModalContextProvider({ children }: StrictPropsWithChildren) {
  const modalValue = useModals();

  return <ModalContext.Provider value={modalValue}>{children}</ModalContext.Provider>;
}

const useModalContext = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('Cannot find Context. It should be wrapped within ContextProvider.');
  return ctx;
};
export { useModalContext };
