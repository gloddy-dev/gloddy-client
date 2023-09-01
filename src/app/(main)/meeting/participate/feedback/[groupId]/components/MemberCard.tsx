import NoShowModal from './NoShowModal.client';
import TitleSection from './TitleSection';
import { EstimateResponse } from '@/apis/groups';
import { Avatar } from '@/components/Avatar';
import { Button, ButtonGroup } from '@/components/Button';
import { CircleCheckbox } from '@/components/common/Checkbox';
import { Spacing } from '@/components/common/Spacing';
import { Divider } from '@/components/Divider';
import { Flex } from '@/components/Layout';
import { Tag } from '@/components/Tag';
import { DUMMY_DATA_ESTIMATE } from '@/constants/dummyData';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';

interface MemberCardProps {
  member: EstimateResponse['groupMemberList'][0];
}

export default function MemberCard({ member }: MemberCardProps) {
  const { imageUrl, name } = member;
  const { open, close } = useModal();
  return (
    <section className="px-20">
      <Spacing size={16} />
      <Flex align="center">
        <Avatar size="medium" imageUrl={imageUrl} />
        <Spacing size={12} direction="horizontal" />
        <div className="flex grow flex-col justify-center">
          <p className="text-paragraph-1">{name}</p>
          <p className="text-caption text-sign-tertiary">{name}</p>
        </div>

        <CircleCheckbox />
      </Flex>

      <Spacing size={8} />

      <Spacing size={20} />
      <Divider />
    </section>
  );
}
