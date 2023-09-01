import NoShowModal from './NoShowModal.client';
import Step1Header from './Step1Header';
import { EstimateResponse } from '@/apis/groups';
import { Avatar } from '@/components/Avatar';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';
import { Flex } from '@/components/Layout';
import { Tag } from '@/components/Tag';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';

interface Step1Props {
  onNextClick: () => void;
}

const DUMMY_DATA_ESTIMATE: EstimateResponse = {
  groupMemberList: [
    {
      imageUrl: '/public/images/dummy_avatar.png',
      name: '김지수',
    },
    {
      imageUrl: '/public/images/dummy_avatar.png',
      name: '김지하',
    },
    {
      imageUrl: '/public/images/dummy_avatar.png',
      name: '김지상',
    },
  ],
};

const tagList = ['차분함', '친절함', '적극적', '유머러스'];

export default function Step1({ onNextClick }: Step1Props) {
  return (
    <div>
      <Step1Header />

      <div className="px-20">
        <Spacing size={32} />
        닷닷닷
        <Spacing size={12} />
        <h3 className="text-h3">모임에서 어땠나요?</h3>
        <Spacing size={20} />
      </div>
      <Divider thickness="thick" />
      {DUMMY_DATA_ESTIMATE.groupMemberList.map((member, index) => (
        <MemberCard member={member} key={index} />
      ))}
    </div>
  );
}
interface MemberCardProps {
  member: EstimateResponse['groupMemberList'][0];
}
function MemberCard({ member }: MemberCardProps) {
  const { imageUrl, name } = member;
  const { open, close } = useModal();
  return (
    <section className="px-20">
      <Spacing size={16} />
      <Flex align="center">
        <Avatar size="large" imageUrl={imageUrl} />
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

      <Flex justify="center">
        {tagList.map((tag, index) => (
          <Tag key={index} className="mr-4">
            {tag}
          </Tag>
        ))}
      </Flex>
      <Spacing size={20} />
      <Divider />
    </section>
  );
}
