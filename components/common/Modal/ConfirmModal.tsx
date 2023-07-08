import Button, { ButtonProps } from '@/components/common/Button';
import PortalWrapper from '@/components/common/PortalWrapper';
import ModalWrapper from './ModalWrapper';

interface ConfirmModalProps {
  isOpen?: boolean;
  okText: ButtonProps['text'];
  cancelText: ButtonProps['text'];
  okColor?: ButtonProps['color'];
  cancelColor?: ButtonProps['color'];
  onClickOk?: () => void;
  onClickCancel?: () => void;
  children?: React.ReactNode;
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
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <PortalWrapper>
      <ModalWrapper>
        <div className="w-300 rounded-10 bg-white px-16 pb-15 pt-30">
          <div className="mb-20 flex flex-col items-center text-center">{children}</div>
          <div className="flex flex-col gap-8">
            <Button onClick={onClickOk} text={okText} color={okColor} />
            <Button onClick={onClickCancel} text={cancelText} color={cancelColor} />
          </div>
        </div>
      </ModalWrapper>
    </PortalWrapper>
  );
}
