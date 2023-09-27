import { useTranslation } from '@/app/i18n/client';
import { Modal } from '@/components/Modal';
import { Spacing } from '@/components/Spacing';
import { sendMessageToReactNative } from '@/utils/sendMessageToReactNative';

export default function DeleteCompleteModal() {
  const handleDeleteAccount = () => {
    sendMessageToReactNative('signout');
  };
  const { t } = useTranslation('profile');

  return (
    <Modal variant="ok" okMessage="확인" onOkClick={handleDeleteAccount}>
      <Spacing size={36} />
      <p className="text-sign-primary">{t('settings.withdrawalComplete')}</p>
      <Spacing size={12} />
      <p className="text-paragraph-1 text-sign-tertiary">
        {t('settings.thankYou')}
        <br />
        {t('settings.promise')}
      </p>
    </Modal>
  );
}
