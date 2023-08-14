import ModalWrapper from './ModalWrapper';

import type { PropsWithChildren } from 'react';

interface PopupProps {
  isOpen: boolean;
  onClickOk?: () => void;
  onClickCancel?: () => void;
}

export default function Popup({
  isOpen,
  onClickOk,
  onClickCancel,
  children,
}: PropsWithChildren<PopupProps>) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClickCancel}>
      {children}
    </ModalWrapper>
  );
}
