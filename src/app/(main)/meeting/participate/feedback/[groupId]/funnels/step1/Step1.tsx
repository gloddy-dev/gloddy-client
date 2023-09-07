import NoShowModal from './NoShowModal.client';
import { useFeedbackContext } from '../../components/FeedbackProvider.client';
import TitleSection from '../../components/TitleSection';
import { Avatar } from '@/components/Avatar';
import { Button, ButtonGroup } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { Tag } from '@/components/Tag';
import { useModal } from '@/hooks/useModal';
import { Fragment } from 'react';

import type { EstimateResponse } from '@/apis/groups';

interface Step1Props {
  onNextClick: () => void;
  groupMemberList: EstimateResponse['groupMemberList'];
}

const tagList = ['차분함', '친절함', '적극적', '유머러스'];

export default function Step1({ onNextClick, groupMemberList }: Step1Props) {
  return (
    <div>
      <TitleSection message="모임에서 어땠나요?" step={1} />

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
  const { open, exit } = useModal();
  const { setValue, watch } = useFeedbackContext();
  const handleTag = (tag: string) => {
    setValue(
      'praiseInfos',
      watch('praiseInfos')
        .filter((it) => it.userId !== member.userId)
        .concat({
          userId: member.userId,
          praiseValue: tag,
        })
    );
  };

  return (
    <section className="px-20">
      <Spacing size={16} />
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
        <Icon
          id="24-delete"
          onClick={() =>
            open(() => <NoShowModal name={nickName} imageUrl={imageUrl} onCancelClick={exit} />)
          }
        />
      </Flex>

      <Spacing size={8} />

      <Flex>
        {tagList.map((tag, index) => (
          <Tag
            key={index}
            className="mr-4"
            id={tag}
            onSelected={handleTag}
            isSelected={
              watch('praiseInfos').find((it) => it.userId === member.userId)?.praiseValue === tag
            }
          >
            {tag}
          </Tag>
        ))}
      </Flex>
      <Spacing size={20} />
      <Divider />
    </section>
  );
}
