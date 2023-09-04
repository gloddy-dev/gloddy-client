import { useFeedbackContext } from './FeedbackProvider.client';
import TitleSection from './TitleSection';
import { EstimateResponse } from '@/apis/groups';
import { Avatar } from '@/components/Avatar';
import { Button, ButtonGroup } from '@/components/Button';
import { CircleCheckbox } from '@/components/common/Checkbox';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';
import { Flex } from '@/components/Layout';
import { DUMMY_DATA_ESTIMATE } from '@/constants/dummyData';

interface Step2Props {
  onNextClick: () => void;
}
export default function Step2({ onNextClick }: Step2Props) {
  return (
    <div>
      <TitleSection message="최고의 짝꿍은 누구였나요?" step={2} />
      <Divider thickness="thick" />
      {DUMMY_DATA_ESTIMATE.groupMemberList.map((member, index) => (
        <MemberCard member={member} key={index} />
      ))}
      <ButtonGroup>
        <Button onClick={onNextClick}>다음</Button>
      </ButtonGroup>
    </div>
  );
}

interface MemberCardProps {
  member: EstimateResponse['groupMemberList'][0];
}

function MemberCard({ member }: MemberCardProps) {
  const { imageUrl, name, userId } = member;
  const { setValue, watch } = useFeedbackContext();
  console.log(watch('mateInfo.userId'));

  return (
    <section className="px-20">
      <Spacing size={12} />
      <Flex align="center">
        <Avatar size="medium" imageUrl={imageUrl} />
        <Spacing size={12} direction="horizontal" />
        <Flex direction="column" justify="center" className="grow">
          <p className="text-paragraph-1">{name}</p>
          <p className="text-caption text-sign-tertiary">{name}</p>
        </Flex>
        <CircleCheckbox
          onClick={() => setValue('mateInfo.userId', userId)}
          checked={watch('mateInfo.userId') === userId}
        />
      </Flex>
      <Spacing size={12} />
      <Divider />
    </section>
  );
}
