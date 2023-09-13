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
      <p className="text-sign-primary">{t('withdrawalComplete')}</p>
      <Spacing size={12} />
      <p className="text-paragraph-1 text-sign-tertiary">
        <span className="text-sign-brand">Gloddy</span>를 이용해주시고
        <br />
        사랑해주셔서 감사합니다.
        <br />
        <br />
        더욱 발전하고 노력하는
        <br />
        Gloddy가 되겠습니다.
      </p>
    </Modal>
  );
}
