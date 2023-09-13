import { PRAISE_VALUE_MAP } from '../../../constants';
import { FeedbackRequestType, useFeedbackContext } from '../../components/FeedbackProvider.client';
import Membercard from '../../components/Membercard.client';
import TitleSection from '../../components/TitleSection';
import { type EstimateResponse, usePostEstimate } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Button, ButtonGroup } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Spacing } from '@/components/Spacing';
import { TextFieldController } from '@/components/TextField';
import { useNumberParams } from '@/hooks/useNumberParams';

interface Step3Props {
  groupMemberList: EstimateResponse['groupMemberList'];
}

export default function Step3({ groupMemberList }: Step3Props) {
  const { handleSubmit, watch } = useFeedbackContext();
  const { mutate } = usePostEstimate();
  const { groupId } = useNumberParams();
  const { t } = useTranslation('meeting');

  const onSubmit = (data: FeedbackRequestType) => {
    // TODO : API 연결
    mutate({
      params: { groupId },
      payload: {
        ...data,
        praiseInfos: data.praiseInfos.map((praiseInfo) => ({
          ...praiseInfo,
          praiseValue: PRAISE_VALUE_MAP.get(praiseInfo.praiseValue!),
        })),
      },
    });
  };
  const hookForm = useFeedbackContext();
  const { register } = hookForm;

  return (
    <>
      <TitleSection
        message={`${t('evaluation.reasonBestPartner1')}\n${t('evaluation.reasonBestPartner2')}`}
        step={3}
      />
      <Divider thickness="thick" />
      <Spacing size={16} />
      <div className="px-20">
        <Membercard
          member={
            groupMemberList.filter((it) => it.userId === watch('mateInfo.userId'))[0] ||
            groupMemberList[0]
          }
        />
        <Spacing size={8} />
        <TextFieldController
          as="textarea"
          hookForm={hookForm}
          register={register('mateInfo.selectionReason', { maxLength: 100 })}
          placeholder={t('evaluation.leaveReview')}
          maxCount={100}
        />
      </div>
      <ButtonGroup>
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={watch('mateInfo.selectionReason').length === 0}
        >
          완료
        </Button>
      </ButtonGroup>
    </>
  );
}
