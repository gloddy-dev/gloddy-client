import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';

interface ApplyModalProps {
  onOkClick: () => void;
  onCancelClick: () => void;
}
export default function WriteModal({ onOkClick, onCancelClick }: ApplyModalProps) {
  const { t } = useTranslation('community');

  return (
    <Modal onOkClick={onOkClick} onCancelClick={onCancelClick} variant="success">
      <Spacing size={32} />
      <Icon id="48-check" width={48} height={48} />
      <Spacing size={12} />
      <p>{t('create.submit.content')}</p>
      <Spacing size={16} />
    </Modal>
  );
}
