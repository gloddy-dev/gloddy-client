'use client';
import { useTranslation } from '@/app/i18n/client';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import useAppRouter from '@/hooks/useAppRouter';
import Image from 'next/image';

interface FeedbackModalProps {
  onClose: () => void;
  groupId: number;
}
export default function FeedbackModal({ onClose, groupId }: FeedbackModalProps) {
  const { push } = useAppRouter();
  const { t } = useTranslation('meeting');
  return (
    <Modal
      variant="success"
      okText={t('home.move')}
      cancelText={t('home.cancel')}
      onCancelClick={onClose}
      onOkClick={() => push(`/meeting/participate/feedback/${groupId}`)}
    >
      <Spacing size={28} />
      <Image src="/images/approve_character.png" width={130} height={130} alt="approve" />
      <p className="text-paragraph-1 text-sign-tertiary">{t('home.enjoyedGroup')}</p>
      <p className="text-subtitle-1 text-sign-primary">{t('home.complimentMembers')}</p>
    </Modal>
  );
}
