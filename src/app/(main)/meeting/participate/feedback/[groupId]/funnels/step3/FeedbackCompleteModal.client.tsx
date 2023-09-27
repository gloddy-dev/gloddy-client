import { useTranslation } from '@/app/i18n/client';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';

interface FeedbackCompleteModalProps {
  onClose: () => void;
}

export default function FeedbackCompleteModal({ onClose }: FeedbackCompleteModalProps) {
  const { t } = useTranslation('meeting');
  return (
    <Modal variant="ok" okMessage="확인" onOkClick={onClose}>
      <Spacing size={36} />
      <h4 className="text-h4">Let’s go for a walk!</h4>
      <p className="text-subtitle-1">{t('evaluation.evaluationComplete')}</p>
      <Spacing size={12} />
      <p className="text-paragraph-1 text-sign-tertiary">
        {t('evaluation.excitingGroups1')}
        <br />
        {t('evaluation.excitingGroups2')}
      </p>
      <Spacing size={20} />
    </Modal>
  );
}
