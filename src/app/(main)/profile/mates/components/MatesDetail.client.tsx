'use client';

import MoreBottomSheet from './MoreBottomSheet.client';
import { formatRelativeDate } from '../util';
import { type Mate, useGetMates } from '@/apis/profile';
import NoMeeting from '@/app/(main)/meeting/components/NoMeeting';
import { Avatar } from '@/components/Avatar';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';
import { useModal } from '@/hooks/useModal';

export default function MatesDetail() {
  const {
    data: { mates: matesData },
  } = useGetMates();

  return (
    <main>
      {matesData.length === 0 && <NoMeeting message="작성한 후기가 없습니다." />}
      {matesData.map((mateData) => (
        <Mates key={mateData.createdAt} mateData={mateData} />
      ))}
    </main>
  );
}

interface MatesProps {
  mateData: Mate;
}

function Mates({ mateData }: MatesProps) {
  const { mateImageUrl, mateName, school, createdAt, selectionReason } = mateData;
  const { open, close } = useModal();

  const handleMateDelete = () => {
    open(({ isOpen }) => (
      <MoreBottomSheet onCloseBottomSheet={close} mateData={mateData} isOpen={isOpen} />
    ));
  };

  return (
    <Flex direction="column" className="border-1 border-divider px-24">
      <Spacing size={16} />
      <Flex>
        <Avatar imageUrl={mateImageUrl} size="small" />
        <Spacing size={12} direction="horizontal" />
        <Flex direction="column">
          <p className="text-paragraph-2 text-sign-secondary">{mateName}</p>
          <p className="text-caption text-sign-tertiary">
            {school ?? formatRelativeDate(createdAt)}
          </p>
        </Flex>
        <Icon id="24-more" className="ml-auto" onClick={handleMateDelete} />
      </Flex>
      <Spacing size={8} />
      <Flex className="text-paragraph-2">{selectionReason}</Flex>
      <Spacing size={20} />
    </Flex>
  );
}
