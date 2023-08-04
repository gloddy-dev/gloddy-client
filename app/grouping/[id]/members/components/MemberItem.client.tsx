'use client';
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
      <div className="relative h-38 w-38">
        <Image
          src={imageUrl ?? '/assets/avatar.svg'}
          alt="member"
          className="rounded-full object-cover"
          fill
        />
        {isCertified && (
          <Image
            src="/assets/check_mark.svg"
            alt="certified"
            width={16}
            height={16}
            className="absolute -right-8 -top-8"
          />
        )}
      </div>
      <Spacing size={13} direction="horizontal" />
      <p className={clsx('font-700', isCaptain ? 'text-blue' : 'text-gray')}>{name}</p>
      <div className="flex-grow" />
      <p className="text-10 font-700 text-blue">{personality}</p>
      <Spacing size={16} direction="horizontal" />
      <Image src="/assets/arrow_right_gray.svg" alt="arrow_right" width={7} height={14} />
    </div>
  );
}
