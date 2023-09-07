import FeedbackCompleteModal from './FeedbackCompleteModal.client';
import { PRAISE_VALUE_MAP } from '../../../constants';
import { FeedbackRequestType, useFeedbackContext } from '../../components/FeedbackProvider.client';
import Membercard from '../../components/Membercard.client';
import TitleSection from '../../components/TitleSection';
import { type EstimateResponse, usePostEstimate } from '@/apis/groups';
import { Button, ButtonGroup } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Spacing } from '@/components/Spacing';
import { TextFieldController } from '@/components/TextField';
import { useModal } from '@/hooks/useModal';
import { useNumberParams } from '@/hooks/useNumberParams';

interface Step3Props {
  groupMemberList: EstimateResponse['groupMemberList'];
}

export default function Step3({ groupMemberList }: Step3Props) {
  const { handleSubmit, watch } = useFeedbackContext();
  const { open } = useModal({ isUnmountExit: false });
  const { mutate } = usePostEstimate();
  const { groupId } = useNumberParams();

  const onSubmit = (data: FeedbackRequestType) => {
    // TODO : API 연결
    console.log(data);
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
    open(({ exit }) => <FeedbackCompleteModal onClose={exit} />);
  };
  const hookForm = useFeedbackContext();
  const { register } = hookForm;

  return (
    <>
      <TitleSection message={`최고의 짝꿍으로\n선정한 이유는 무엇인가요?`} step={3} />
      <Divider thickness="thick" />
      <Spacing size={16} />
      <div className="px-20">
        <Membercard member={groupMemberList[0]} />
        <Spacing size={8} />
        <TextFieldController
          as="textarea"
          hookForm={hookForm}
          register={register('mateInfo.selectionReason', { maxLength: 100 })}
          placeholder="최고의 짝꿍에게 후기를 남겨주세요."
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
