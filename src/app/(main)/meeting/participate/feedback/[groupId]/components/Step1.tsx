import { useFeedbackContext } from './FeedbackProvider.client';
import NoShowModal from './NoShowModal.client';
import TitleSection from './TitleSection';
import { EstimateResponse } from '@/apis/groups';
import { Avatar } from '@/components/Avatar';
import { Button, ButtonGroup } from '@/components/Button';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';
import { Flex } from '@/components/Layout';
import { Tag } from '@/components/Tag';
import { DUMMY_DATA_ESTIMATE } from '@/constants/dummyData';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';

interface Step1Props {
  onNextClick: () => void;
}

const tagList = ['차분함', '친절함', '적극적', '유머러스'];

export default function Step1({ onNextClick }: Step1Props) {
  return (
    <div>
      <TitleSection message="모임에서 어땠나요?" step={1} />

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
  const { imageUrl, name } = member;
  const { open, close } = useModal();
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
        <Avatar size="medium" imageUrl={imageUrl} />
        <Spacing size={12} direction="horizontal" />
        <div className="flex grow flex-col justify-center">
          <p className="text-paragraph-1">{name}</p>
          <p className="text-caption text-sign-tertiary">{name}</p>
        </div>
        <Image
          src="/icons/24/close.svg"
          width={24}
          height={24}
          alt="close"
          onClick={() =>
            open(<NoShowModal name={name} imageUrl={imageUrl} onCancelClick={close} />)
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
