import { useTranslation } from '@/app/i18n/client';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import Image from 'next/image';

import type { ApplyStatusType } from '@/types';

interface ManageModalProps {
  type: ApplyStatusType;
  onOkClick: () => void;
  onCancelClick: () => void;
}

export default function ManageModal({ type, onOkClick, onCancelClick }: ManageModalProps) {
  const { t } = useTranslation('groupDetail');

  const modalText = {
    APPROVE: {
      description: t('manage.approve.description'),
      content: t('manage.approve.content'),
      variant: 'success',
      image: '/images/approve_character.png',
    },
    REFUSE: {
      description: t('manage.refuse.description'),
      content: t('manage.refuse.content'),
      variant: 'warning',
      image: '/images/refuse_character.png',
    },
  } as const;

  const { description, content, variant, image } = modalText[type];

  return (
    <Modal variant={variant} onOkClick={onOkClick} onCancelClick={onCancelClick}>
      <Spacing size={32} />
      <Image src={image} alt="character" width={130} height={130} />
      <Spacing size={22} />
      <p className="text-paragraph-1 text-sign-tertiary">{description}</p>
      <Spacing size={12} />
      <p>{content}</p>
      <Spacing size={16} />
    </Modal>
  );
}
