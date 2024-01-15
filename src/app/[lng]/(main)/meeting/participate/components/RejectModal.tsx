import { usePostApply } from '@/apis/meeting';
import { useTranslation } from '@/app/i18n/client';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import useAppRouter from '@/hooks/useAppRouter';

interface RejectModalProps {
  applyId: number;
}

export default function RejectModal({ applyId }: RejectModalProps) {
  const { push } = useAppRouter();
  const { mutate } = usePostApply();
  const { t } = useTranslation('meeting');
  const handleOkClick = () => {
    mutate(applyId, {
      onSuccess: () => {
        push('/grouping');
      },
    });
  };

  return (
    <Modal variant="ok" okMessage={t('home.applyOtherGroups')} onOkClick={handleOkClick}>
      <Spacing size={36} />
      <h4 className="text-h4 text-sign-primary">Let’s go for a walk!</h4>
      <p className="text-subtitle-1 text-sign-primary">{t('rejectedApplication')}</p>
      <Spacing size={12} />
      <p className="text-paragraph-1 text-sign-tertiary">
        {t('home.excitingActivities1')}
        <br />
        {t('home.excitingActivities2')}
      </p>
      <Spacing size={20} />
    </Modal>
  );
}
