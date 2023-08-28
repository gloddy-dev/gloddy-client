'use client';

import MoreBottomSheet from './MoreBottomSheet.client';
import { formatRelativeDate } from '../util';
import { type Mate, useGetMates } from '@/apis/profile';
import { Avatar } from '@/components/Avatar';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import { DUMMY_PROFILE_MATES_DATA } from '@/constants/dummyData';
import useBottomSheet from '@/hooks/useBottomSheet';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';

export default function MatesDetail() {
  const {
    data: { mates: matesData },
  } = useGetMates();

  return (
    <main>
      {DUMMY_PROFILE_MATES_DATA.map((mateData) => (
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
  const { isOpen, open, close } = useBottomSheet();

  const handleMateDelete = () => {
    open();
  };

  return (
    <Flex direction="column" className="border-1 border-divider px-24">
      {isOpen && <MoreBottomSheet onCloseBottomSheet={close} mateData={mateData} />}
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
        <Image
          src="/icons/24/more.svg"
          alt="more"
          width={24}
          height={24}
          className="ml-auto"
          onClick={handleMateDelete}
        />
      </Flex>
      <Spacing size={8} />
      <Flex className="text-paragraph-2">{selectionReason}</Flex>
      <Spacing size={20} />
    </Flex>
  );
}
