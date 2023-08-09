'use client';

import { PraisesResponse, useGetPraises } from '@/apis/profile';
import { Spacing } from '@/components/common/Spacing';
import Image from 'next/image';

interface Praise {
  id: number;
  title: string;
  imagePath: 'calm' | 'kind' | 'active' | 'humor';
  dataPath: keyof PraisesResponse;
}

const praises: Praise[] = [
  {
    id: 1,
    title: '차분해요.',
    imagePath: 'calm',
    dataPath: 'totalCalmCount',
  },
  {
    id: 2,
    title: '친절해요.',
    imagePath: 'kind',
    dataPath: 'totalKindCount',
  },
  {
    id: 3,
    title: '적극적이에요.',
    imagePath: 'active',
    dataPath: 'totalActiveCount',
  },
  {
    id: 4,
    title: '유머러스해요.',
    imagePath: 'humor',
    dataPath: 'totalHumorCount',
  },
];

export default function ProfilePraiseDetail() {
  const { data: praisesData } = useGetPraises();

  return (
    <main className="flex flex-col gap-20 px-20">
      {praises.map((praise) => (
        <PraiseItem key={praise.id} praise={praise} count={praisesData[praise.dataPath]} />
      ))}
    </main>
  );
}

interface PraiseItemProps {
  praise: Praise;
  count: number;
}

function PraiseItem({ praise, count }: PraiseItemProps) {
  return (
    <div className="flex h-68 items-center justify-between rounded-8 bg-gray6 px-18 py-10">
      <div className="flex items-center">
        <Image
          src={`/assets/${praise.imagePath}_selected.svg`}
          alt={praise.title}
          width={50}
          height={50}
        />
        <Spacing size={5} direction="horizontal" />
        <div>{praise.title}</div>
      </div>
      <div className="flex font-700">
        {count}
        <Spacing size={5} direction="horizontal" />
        <span>명</span>
      </div>
    </div>
  );
}
