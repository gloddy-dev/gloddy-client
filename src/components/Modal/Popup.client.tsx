import ModalWrapper from './ModalWrapper';
import { Button } from '../Button';
import { Spacing } from '../common/Spacing';
import { StrictPropsWithChildren } from '@/types';

interface PopupProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onOkClick?: () => void;
  okText?: string;
  onCancelClick?: () => void;
  cancelText?: string;
  variant?: 'warning' | 'success';
}

const variantMap = {
  warning: {
    ok: 'solid-warning',
    cancel: 'outline-warning',
  },
  success: {
    ok: 'solid-primary',
    cancel: 'solid-default',
  },
} as const;

export default function Popup({
  children,
  isOpen,
  onOkClick,
  okText = '네',
  onCancelClick,
  cancelText = '아니요',
  variant = 'warning',
}: StrictPropsWithChildren<PopupProps>) {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onCancelClick}>
      <div className="flex w-300 flex-col items-center rounded-16 bg-white px-16 py-12">
        {children}
        {onCancelClick && (
          <div className="w-full">
            <Button
              variant={variantMap[variant].ok}
              className="w-full"
              size="small"
              onClick={onOkClick}
            >
              {okText}
            </Button>
            <Spacing size={8} />
            <Button
              variant={variantMap[variant].cancel}
              className="w-full"
              size="small"
              onClick={onCancelClick}
            >
              {cancelText}
            </Button>
          </div>
        )}
      </div>
    </ModalWrapper>
  );
}
