import { useFeedbackContext } from '../../components/FeedbackProvider.client';
import TitleSection from '../../components/TitleSection';
import { Avatar } from '@/components/Avatar';
import { Button, ButtonGroup } from '@/components/Button';
import { CircleCheckbox } from '@/components/Checkbox';
import { Divider } from '@/components/Divider';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { Fragment } from 'react';

import type { EstimateResponse } from '@/apis/groups';

interface Step2Props {
  onNextClick: () => void;
  groupMemberList: EstimateResponse['groupMemberList'];
}
export default function Step2({ onNextClick, groupMemberList }: Step2Props) {
  return (
    <div>
      <TitleSection message="최고의 짝꿍은 누구였나요?" step={2} />
      <Divider thickness="thick" />
      {groupMemberList.map((member, index) => (
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
  const { imageUrl, isCaptain, nickName, reliabilityLevel, userId } = member;
  const { setValue, watch } = useFeedbackContext();
  console.log(watch('mateInfo.userId'));

  return (
    <section className="px-20">
      <Spacing size={12} />
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
