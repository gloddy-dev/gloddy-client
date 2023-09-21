import DeleteCompleteModal from './DeleteCompleteModal.client';
import { usePatchSignOut } from '@/apis/profile';
import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import { AUTH_KEYS } from '@/constants/token';
import { useModal } from '@/hooks/useModal';
import { removeLocalCookie } from '@/utils/cookieController';

interface DeleteModalProps {
  onCancelClick: () => void;
}

export default function DeleteModal({ onCancelClick }: DeleteModalProps) {
  const { open } = useModal();
  const { t } = useTranslation('profile');
  const { mutate } = usePatchSignOut();
  const handleDeleteClick = () => {
    mutate();
    removeLocalCookie(AUTH_KEYS.accessToken);
    removeLocalCookie(AUTH_KEYS.refreshToken);
    removeLocalCookie(AUTH_KEYS.userId);
    open(() => <DeleteCompleteModal />);
  };

  return (
    <Modal variant="warning" onCancelClick={onCancelClick} onOkClick={handleDeleteClick}>
      <Spacing size={32} />
      <Icon id="48-warning" width={48} height={48} />
      <Spacing size={12} />
      <p className="text-subtitle-1">{t('settings.confirmWithdrawal')}</p>
      <Spacing size={4} />
      <p className="text-paragraph-1 text-sign-tertiary">{t('settings.ifYouDelete')}</p>
    </Modal>
  );
}
