import { useTranslation } from '@/app/i18n/client';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FeedbackOutModalProps {
  onClose: () => void;
}
export default function FeedbackOutModal({ onClose }: FeedbackOutModalProps) {
  const router = useRouter();
  const { t } = useTranslation('meeting');

  return (
    <Modal variant="warning" onOkClick={() => router.back()} onCancelClick={onClose}>
      <Spacing size={28} />
      <div className="py-15">
        <Image src="/images/refuse_character.png" width={130} height={130} alt="refuse" />
      </div>
      <Spacing size={8} />
      <p className="text-paragraph-1 text-sign-tertiary">
        {t('evaluation.evaluationHelp1')}
        <br />
        {t('evaluation.evaluationHelp2')}
      </p>
      <Spacing size={12} />
      <p>{t('evaluation.reallyNotEvaluate')} 🥹</p>
      <Spacing size={16} />
    </Modal>
  );
}
