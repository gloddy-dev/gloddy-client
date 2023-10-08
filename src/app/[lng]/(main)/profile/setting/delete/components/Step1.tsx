import { useDeleteContext } from './DeleteProvider.client';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { CircleCheckbox } from '@/components/Checkbox';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { TextList } from '@/components/TextList';

interface Step1Props {
  onNextClick: () => void;
}
const infoList = [
  'deleteAllPraises',
  'deleteBestPartnerReviews',
  'deleteTrustScore',
  'deleteGroupData',
];

export default function Step1({ onNextClick }: Step1Props) {
  const { t } = useTranslation('profile');
  const { t: tc } = useTranslation('common');
  const { setValue, watch } = useDeleteContext();
  const handleDeleteAgree = () => {
    setValue('isDeleteAgree', !watch('isDeleteAgree'));
  };

  return (
    <div>
      <Spacing size={32} />
      <h3 className="px-20 text-h3">{t('settings.confirmDeletion')}</h3>
      <Spacing size={16} />
      <div className="px-20">
        {infoList.map((info, index) => (
          <TextList key={index}>{t(`settings.${info}`)}</TextList>
        ))}
      </div>

      <Spacing size={32} />

      <Flex className="px-20" onClick={handleDeleteAgree}>
        <CircleCheckbox checked={watch('isDeleteAgree')} />
        <Spacing size={8} direction="horizontal" />
        <p className="text-subtitle-2 text-sign-secondary">{t('settings.agreeTerms')}</p>
      </Flex>

      <ButtonGroup>
        <Button onClick={onNextClick} disabled={!watch('isDeleteAgree')}>
          {tc('next')}
        </Button>
      </ButtonGroup>
    </div>
  );
}
