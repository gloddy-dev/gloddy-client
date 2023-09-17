import DeleteCompleteModal from './DeleteCompleteModal.client';
import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import { useModal } from '@/hooks/useModal';

interface DeleteModalProps {
  onCancelClick: () => void;
}

export default function DeleteModal({ onCancelClick }: DeleteModalProps) {
  const { open } = useModal();
  const { t } = useTranslation('profile');

  return (
    <Modal
      variant="warning"
      onCancelClick={onCancelClick}
      onOkClick={() => open(() => <DeleteCompleteModal />)}
    >
      <Spacing size={32} />
      <Icon id="48-warning" width={48} height={48} />
      <Spacing size={12} />
      <p className="text-subtitle-1">{t('settings.confirmWithdrawal')}</p>
      <Spacing size={4} />
      <p className="text-paragraph-1 text-sign-tertiary">{t('settings.ifYouDelete')}</p>
    </Modal>
  );
}
