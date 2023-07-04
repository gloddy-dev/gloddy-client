import { useCallback, useState } from 'react';

export const useModal = <ModalName>() => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalName, setModalName] = useState<ModalName>();
  const [modalProps, setModalProps] = useState({});

  const openModal = useCallback((name: ModalName, props?: any) => {
    setModalName(name);
    if (props) setModalProps(props);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
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
