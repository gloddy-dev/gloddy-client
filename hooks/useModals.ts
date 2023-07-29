import { useCallback, useState } from 'react';

export const useModals = <ModalName extends string | undefined>() => {
  const [isOpen, setisOpen] = useState(false);
  const [modalName, setModalName] = useState<ModalName>();
  const [modalProps, setModalProps] = useState({});

  const openModal = useCallback((name: ModalName, props?: any) => {
    setModalName(name);
    if (props) setModalProps(props);
    setisOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setisOpen(false);
    setModalName(undefined);
  }, []);

  return {
    isOpen,
    modalName,
    modalProps,
    openModal,
    closeModal,
  };
};
