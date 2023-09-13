import { useTranslation } from '@/app/i18n/client';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';

interface ReportDoneModalProps {
  onOkClick: () => void;
}
export default function ReportDoneModal({ onOkClick }: ReportDoneModalProps) {
  const { t } = useTranslation('common');

  return (
    <Modal variant="ok" okMessage="확인" onOkClick={onOkClick}>
      <Spacing size={36} />
      <p>{t('reportMessage1')}</p>
      <Spacing size={12} />
      <p className="text-paragraph-1 text-sign-tertiary">{t('reportMessage2')}</p>
      <Spacing size={20} />
    </Modal>
  );
}
