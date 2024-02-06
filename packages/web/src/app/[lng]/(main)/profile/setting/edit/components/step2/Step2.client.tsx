import Step2Header from './Step2Header';
import Step2InputForm from './Step2InputForm.client';

import { useTranslation } from '@/app/i18n/client';
import { Spacing } from '@/components/Spacing';

interface Step2Props {
  onPrev: () => void;
}

export default function Step2({ onPrev }: Step2Props) {
  const { t } = useTranslation('profile');

  return (
    <>
      <Step2Header onClose={onPrev} />

      <div className="text-h3 text-sign-cto px-20 pb-16 pt-32">
        {t('settings.사용자님의 성격을')}
        <br />
        {t('settings.선택해주세요!')}
      </div>
      <p className="text-subtitle-2 text-sign-tertiary px-20">{t('settings.pickThree')}</p>
      <Spacing size={16} />
      <Step2InputForm onPrevClick={onPrev} />
    </>
  );
}
