'use client';
import ModalWrapper from './ModalWrapper.client';
import { Button } from '../Button';
import { Spacing } from '../Spacing';
import { useTranslation } from '@/app/i18n/client';
import { StrictPropsWithChildren } from '@/types';
import cn from '@/utils/cn';
import { useState } from 'react';

export interface ModalProps {
  onOkClick?: () => void;
  okText?: string;
  okDisabled?: boolean;
  onCancelClick?: () => void;
  cancelText?: string;
  variant?: 'warning' | 'success' | 'ok';
  className?: string;
  okMessage?: string;
  isPending?: boolean;
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
  okText,
  okDisabled = false,
  onCancelClick,
  cancelText,
  variant,
  className,
  okMessage,
  isPending,
}: StrictPropsWithChildren<ModalProps>) {
  const { t } = useTranslation('common');
  const onOkClickHandler = () => {
    onOkClick?.();
  };

  return (
    <ModalWrapper onClose={onCancelClick}>
      <div
        className={cn(
          'flex w-300 flex-col items-center rounded-16 bg-white px-16 text-center',
          className
        )}
      >
        {children}
        {(variant === 'warning' || variant === 'success') && (
          <div className="w-full py-12">
            <Button
              variant={variantMap[variant].ok}
              className="w-full"
              size="small"
              onClick={onOkClickHandler}
              isPending={isPending}
              actionType="throttle"
            >
              {okText || t('yes')}
            </Button>
            <Spacing size={8} />
            <Button
              variant={variantMap[variant].cancel}
              className="w-full"
              size="small"
              onClick={onCancelClick}
            >
              {cancelText || t('no')}
            </Button>
          </div>
        )}
        {variant === 'ok' && (
          <div className="w-full py-12">
            <Button onClick={onOkClick}>{okMessage || t('confirm')}</Button>
          </div>
        )}
      </div>
    </ModalWrapper>
  );
}
