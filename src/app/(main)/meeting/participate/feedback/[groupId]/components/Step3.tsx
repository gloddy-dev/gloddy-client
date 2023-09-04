import FeedbackCompleteModal from './FeedbackCompleteModal.client';
import { FeedbackRequestType, useFeedbackContext } from './FeedbackProvider.client';
import TitleSection from './TitleSection';
import { Avatar } from '@/components/Avatar';
import { Button, ButtonGroup } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';
import { Flex } from '@/components/Layout';
import { TextFieldController } from '@/components/TextField';
import { DUMMY_DATA_ESTIMATE } from '@/constants/dummyData';
import { useModal } from '@/hooks/useModal';
import { useRouter } from 'next/navigation';

import type { EstimateResponse } from '@/apis/groups';

export default function Step3() {
  const { handleSubmit, watch } = useFeedbackContext();
  const router = useRouter();
  const { open } = useModal();
  const onSubmit = (data: FeedbackRequestType) => {
    // TODO : API 연결
    router.push('/meeting/participate?tab=participating');
    open(<FeedbackCompleteModal />);
  };

  return (
    <>
      <TitleSection message={`최고의 짝꿍으로\n선정한 이유는 무엇인가요?`} step={3} />
      <Divider thickness="thick" />
      <Spacing size={16} />
      <MemberCard member={DUMMY_DATA_ESTIMATE.groupMemberList[0]} />

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

interface MemberCardProps {
  member: EstimateResponse['groupMemberList'][0];
}

function MemberCard({ member }: MemberCardProps) {
  const { imageUrl, name } = member;
  const hookForm = useFeedbackContext();
  const { register } = hookForm;

  return (
    <section className="px-20">
      <Flex align="center">
        <Avatar size="medium" imageUrl={imageUrl} />
        <Spacing size={12} direction="horizontal" />
        <div className="flex grow flex-col justify-center">
          <p className="text-paragraph-1">{name}</p>
          <p className="text-caption text-sign-tertiary">{name}</p>
        </div>
      </Flex>
      <Spacing size={8} />
      <TextFieldController
        as="textarea"
        hookForm={hookForm}
        register={register('mateInfo.selectionReason', { maxLength: 100 })}
        placeholder="최고의 짝꿍에게 후기를 남겨주세요."
        maxCount={100}
      />
    </section>
  );
}
