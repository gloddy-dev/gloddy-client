import { useTranslation } from '@/app/i18n/client';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';

interface BlockDoneModalProps {
  onOkClick: () => void;
}

export default function BlockDoneModal({ onOkClick }: BlockDoneModalProps) {
  const { t } = useTranslation('common');

  return (
    <Modal variant="ok" onOkClick={onOkClick}>
      <Spacing size={36} />
      <p>{t('blockMessage')}</p>
      <Spacing size={20} />
    </Modal>
  );
}
