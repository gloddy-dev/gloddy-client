import { useCallback, useState } from 'react';

export const useModals = <ModalName>() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalName, setModalName] = useState<ModalName>();
  const [modalProps, setModalProps] = useState({});

  const openModal = useCallback((name: ModalName, props?: any) => {
    setModalName(name);
    if (props) setModalProps(props);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setModalName(undefined);
  }, []);

  return {
    isModalOpen,
    modalName,
    modalProps,
    openModal,
    closeModal,
  };
};
