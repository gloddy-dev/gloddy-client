'use client';
import { Avatar } from '@/components/Avatar';
import { Spacing } from '@/components/common/Spacing';
import clsx from 'clsx';
import Image from 'next/image';

interface MemberItemProps {
  imageUrl: string;
  name: string;
  isCaptain: boolean;
  isCertified: boolean;
  personality: string;
}

export default function MemberItem({
  imageUrl,
  name,
  isCaptain,
  isCertified,
  personality,
}: MemberItemProps) {
  return (
    <div className="flex items-center rounded-8 bg-gray6 p-16">
      <Avatar imageUrl={imageUrl} isCertified={isCertified} />
      <Spacing size={13} direction="horizontal" />
      <p className={clsx('font-700', isCaptain ? 'text-blue' : 'text-gray')}>{name}</p>
      <div className="flex-grow" />
      <p className="font-700 text-10 text-blue">{personality}</p>
      <Spacing size={16} direction="horizontal" />
      <Image src="/assets/arrow_right_gray.svg" alt="arrow_right" width={7} height={14} />
    </div>
  );
}
