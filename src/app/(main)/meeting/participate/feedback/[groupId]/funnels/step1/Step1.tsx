import NoShowModal from './NoShowModal.client';
import { useFeedbackContext } from '../../components/FeedbackProvider.client';
import Membercard from '../../components/Membercard.client';
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
  const { open, exit } = useModal();
  const { setValue, watch } = useFeedbackContext();
  const handleTag = (tag: string, userId: number) => {
    setValue(
      'praiseInfos',
      watch('praiseInfos')
        .filter((it) => it.userId !== userId)
        .concat({
          userId,
          praiseValue: tag,
        })
    );
  };

  return (
    <div>
      <TitleSection message="모임에서 어땠나요?" step={1} />

      <Divider thickness="thick" />
      {groupMemberList.map((member) => (
        <div key={member.userId} className="px-20">
          <Spacing size={16} />
          <Membercard member={member}>
            <Membercard.Right>
              <Icon
                id="24-delete"
                onClick={() =>
                  open(() => (
                    <NoShowModal
                      name={member.nickName}
                      imageUrl={member.imageUrl}
                      onCancelClick={exit}
                    />
                  ))
                }
              />
            </Membercard.Right>
          </Membercard>
          <Spacing size={8} />
          <Flex>
            {tagList.map((tag, index) => (
              <Tag
                key={index}
                className="mr-4"
                id={tag}
                onSelected={() => handleTag(tag, member.userId)}
                isSelected={
                  watch('praiseInfos').find((it) => it.userId === member.userId)?.praiseValue ===
                  tag
                }
              >
                {tag}
              </Tag>
            ))}
          </Flex>
          <Spacing size={20} />
          <Divider />
        </div>
      ))}
      <ButtonGroup>
        <Button onClick={onNextClick}>다음</Button>
      </ButtonGroup>
    </div>
  );
}
