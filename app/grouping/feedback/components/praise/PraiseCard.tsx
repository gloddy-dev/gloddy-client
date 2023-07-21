'use client';

import { Spacing } from '@/components/common/Spacing';
import cn from '@/utils/cn';
import Image from 'next/image';
import { useState } from 'react';

import type { PraiseType } from '../../type';

const praises: Array<{
  name: string;
  type: PraiseType;
}> = [
  {
    name: '차분',
    type: 'calm',
  },
  {
    name: '친절',
    type: 'kind',
  },
  {
    name: '적극',
    type: 'active',
  },
  {
    name: '유머',
    type: 'humor',
  },
];

interface PraiseCardProps {
  name: string;
  imageUrl: string;
}

export default function PraiseCard({ name, imageUrl }: PraiseCardProps) {
  const [selectedPraise, setSelectedPraise] = useState<PraiseType>();

  const handleKickClick = () => {
    // TODO: 불참 모달 띄우기
  };

  return (
    <div className="rounded-8 bg-gray6 p-16">
      <div className="flex items-center">
        <div className="relative h-38 w-38">
          <Image src={imageUrl} alt="member" className="rounded-full object-cover" fill />
        </div>
        <Spacing size={12} direction="horizontal" />
        <p className="grow font-700">{name}</p>
        <Image
          src="/assets/close_red.svg"
          alt="kick"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={handleKickClick}
        />
      </div>
      <Spacing size={20} />
      <div className="flex">
        {praises.map(({ name, type }) => (
          <div
            key={type}
            className="flex grow cursor-pointer flex-col items-center"
            onClick={() => setSelectedPraise(type)}
          >
            <Image
              src={`/assets/${type}${selectedPraise === type ? '_selected' : ''}.svg`}
              width={70}
              height={70}
              alt="praise"
            />
            <Spacing size={5} />
            <p className={cn('text-12', selectedPraise === type ? 'text-blue' : 'text-gray')}>
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
