import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { Modal, type ModalProps } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';

export default function CertificateSkipModal({ ...props }: ModalProps) {
  const { t } = useTranslation('join');
  return (
    <Modal variant="warning" {...props}>
      <Spacing size={32} />
      <Icon id="48-warning" width={48} height={48} />
      <Spacing size={12} />
      <p className="text-subtitle-1">{t('personality_later_title')}</p>
      <Spacing size={4} />
      <p className="text-sign-tertiary">{t('personality_later')}</p>
      <Spacing size={16} />
    </Modal>
  );
}
