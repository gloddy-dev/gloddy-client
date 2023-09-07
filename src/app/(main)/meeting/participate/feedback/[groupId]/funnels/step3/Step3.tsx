import FeedbackCompleteModal from './FeedbackCompleteModal.client';
import { FeedbackRequestType, useFeedbackContext } from '../../components/FeedbackProvider.client';
import TitleSection from '../../components/TitleSection';
import { Avatar } from '@/components/Avatar';
import { Button, ButtonGroup } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { TextFieldController } from '@/components/TextField';
import { useModal } from '@/hooks/useModal';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';

import type { EstimateResponse } from '@/apis/groups';

interface Step3Props {
  groupMemberList: EstimateResponse['groupMemberList'];
}

export default function Step3({ groupMemberList }: Step3Props) {
  const { handleSubmit, watch } = useFeedbackContext();
  const router = useRouter();
  const { open } = useModal({ isUnmountExit: false });
  const onSubmit = (data: FeedbackRequestType) => {
    // TODO : API 연결
    router.push('/meeting/participate?tab=participating');
    open(({ exit }) => <FeedbackCompleteModal onClose={exit} />);
  };

  return (
    <>
      <TitleSection message={`최고의 짝꿍으로\n선정한 이유는 무엇인가요?`} step={3} />
      <Divider thickness="thick" />
      <Spacing size={16} />
      <MemberCard member={groupMemberList[0]} />

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
  const { imageUrl, isCaptain, nickName, reliabilityLevel, userId } = member;
  const hookForm = useFeedbackContext();
  const { register } = hookForm;

  return (
    <section className="px-20">
      <Flex align="center" className="py-4">
        <Avatar size="medium" imageUrl={imageUrl}>
          <Icon id="24-education" className="absolute -right-2 -top-2" />
        </Avatar>
        <Spacing size={12} direction="horizontal" />
        <Flex direction="column" justify="center" className="grow">
          <Flex align="center">
            <p className="text-paragraph-1">{nickName}</p>
            {isCaptain && (
              <Fragment>
                <Spacing size={2} direction="horizontal" />
                <Icon id="16-host" />
              </Fragment>
            )}
          </Flex>

          <Flex align="center">
            <Icon id={`16-reliability-${reliabilityLevel.toLowerCase()}`} />
            <Spacing size={2} direction="horizontal" />
            <p className="text-caption text-sign-tertiary">{reliabilityLevel}</p>
          </Flex>
        </Flex>
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
