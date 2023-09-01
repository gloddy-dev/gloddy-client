'use client';
import ModalWrapper from './ModalWrapper.client';
import { Button } from '../Button';
import { Spacing } from '../common/Spacing';
import { StrictPropsWithChildren } from '@/types';
import cn from '@/utils/cn';

export interface ModalProps {
  onOkClick?: () => void;
  okText?: string;
  onCancelClick?: () => void;
  cancelText?: string;
  variant?: 'warning' | 'success';
  className?: string;
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

export function Modal({
  children,
  onOkClick,
  okText = '네',
  onCancelClick,
  cancelText = '아니오',
  variant,
  className,
}: StrictPropsWithChildren<ModalProps>) {
  return (
    <ModalWrapper onClose={onCancelClick}>
      <div
        className={cn(
          'flex w-300 flex-col items-center rounded-16 bg-white px-16 text-center',
          className
        )}
      >
        {children}
        {variant && (
          <div className="w-full py-12">
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
