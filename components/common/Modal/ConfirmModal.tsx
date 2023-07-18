import ModalWrapper from './ModalWrapper';
import { Button } from '@/components/common/Button';

import type { ButtonProps } from '../Button/Button';
import type { PropsWithChildren } from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  okText: ButtonProps['text'];
  cancelText: ButtonProps['text'];
  okColor?: ButtonProps['color'];
  cancelColor?: ButtonProps['color'];
  onClickOk?: () => void;
  onClickCancel?: () => void;
}

export default function ConfirmModal({
  isOpen,
  onClickOk,
  onClickCancel,
  okText = '네',
  cancelText = '아니요',
  okColor = 'blue',
  cancelColor = 'gray',
  children,
}: PropsWithChildren<ConfirmModalProps>) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClickCancel}>
      <div className="w-300 rounded-10 bg-white px-16 pb-15 pt-30">
        <div className="mb-20 flex flex-col items-center text-center">{children}</div>
        <div className="flex flex-col gap-8">
          <Button onClick={onClickOk} text={okText} color={okColor} />
          <Button onClick={onClickCancel} text={cancelText} color={cancelColor} />
        </div>
      </div>
    </ModalWrapper>
  );
}
