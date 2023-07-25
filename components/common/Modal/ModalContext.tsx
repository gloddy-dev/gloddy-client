import { useModals } from '@/hooks/useModals';
import { StrictPropsWithChildren } from '@/types';
import { createContext, useContext } from 'react';

interface ModalContextProps {}

const ModalContext = createContext<ReturnType<typeof useModals>>(null);

export default function ModalContextProvider({
  children,
}: StrictPropsWithChildren<ModalContextProps>) {
  const { isOpen, modalName, modalProps, openModal, closeModal } = useModals();

  return (
    <ModalContext.Provider value={{ isOpen, modalName, modalProps, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

const useModalContext = () => {
  const ctx = useContext(ModalContext);
  if (!ctx)
    throw new Error('Cannot find ModalContext. It should be wrapped within ModalContextProvider.');
  return ctx;
};
export { useModalContext };
