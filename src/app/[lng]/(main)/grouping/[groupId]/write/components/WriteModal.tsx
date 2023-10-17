import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';

import type { ComponentProps } from 'react';

type ModalStyle = {
  [key in WriteModalProps['type']]: {
    variant: NonNullable<ComponentProps<typeof Modal>['variant']>;
    iconId: string;
    content: string;
  };
};

interface WriteModalProps {
  type: 'write' | 'cancel';
  onOkClick: () => void;
  onCancelClick: () => void;
}

export default function WriteModal({ type, onCancelClick, onOkClick }: WriteModalProps) {
  const { t } = useTranslation('groupDetail');
  const modalStyle: ModalStyle = {
    write: {
      variant: 'success',
      iconId: '48-check',
      content: t('writeArticle.submit.content'),
    },
    cancel: {
      variant: 'warning',
      iconId: '48-warning',
      content: t('writeArticle.cancel.content'),
    },
  };
  const { variant, iconId, content } = modalStyle[type];

  return (
    <Modal variant={variant} onCancelClick={onCancelClick} onOkClick={onOkClick}>
      <Spacing size={32} />
      <Icon id={iconId} width={48} height={48} />
      <Spacing size={12} />
      <p className="text-paragraph-1">{content}</p>
      <Spacing size={16} />
    </Modal>
  );
}
