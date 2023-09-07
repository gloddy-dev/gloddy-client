import { useFeedbackContext } from '../../components/FeedbackProvider.client';
import Membercard from '../../components/Membercard.client';
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
  const { setValue, watch } = useFeedbackContext();
  return (
    <div>
      <TitleSection message="최고의 짝꿍은 누구였나요?" step={2} />
      <Divider thickness="thick" />
      {groupMemberList.map((member) => (
        <div className="p-20" key={member.userId}>
          <Membercard member={member}>
            <Membercard.Right>
              <CircleCheckbox
                onClick={() => setValue('mateInfo.userId', member.userId)}
                checked={watch('mateInfo.userId') === member.userId}
              />
            </Membercard.Right>
          </Membercard>
        </div>
      ))}
      <ButtonGroup>
        <Button onClick={onNextClick}>다음</Button>
      </ButtonGroup>
    </div>
  );
}
