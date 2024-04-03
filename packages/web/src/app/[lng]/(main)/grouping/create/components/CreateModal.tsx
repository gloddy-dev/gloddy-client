import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';

interface CreateModalProps {
  onOkClick: () => void;
  onCancelClick: () => void;
}

export default function CreateModal({ onOkClick, onCancelClick }: CreateModalProps) {
  const { t } = useTranslation('grouping');

  return (
    <Modal
      variant="warning"
      onOkClick={onOkClick}
      onCancelClick={onCancelClick}
      okText={t('create.submit.ok')}
      cancelText={t('create.submit.cancel')}
    >
      <Spacing size={32} />
      <Icon id="48-warning" width={48} height={48} />
      <Spacing size={12} />
      <div>{t('create.submit.message')}</div>
      <Spacing size={16} />
    </Modal>
  );
}
