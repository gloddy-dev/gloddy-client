'use client';

import { PraisesResponse, useGetPraises } from '@/apis/profile';
import { Spacing } from '@/components/common/Spacing';
import { Flex } from '@/components/Layout';
import Image from 'next/image';

interface Praise {
  id: number;
  title: string;
  imagePath: 'happy' | 'kind' | 'active' | 'humor';
  dataPath: keyof PraisesResponse;
}

const praises: Praise[] = [
  {
    id: 1,
    title: '차분해요.',
    imagePath: 'happy',
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
  console.log(praisesData);

  return (
    <Flex as="main" direction="column" className="gap-8 px-20 py-16">
      {praises.map((praise) => (
        <PraiseItem key={praise.id} praise={praise} count={praisesData[praise.dataPath]} />
      ))}
    </Flex>
  );
}

interface PraiseItemProps {
  praise: Praise;
  count: number;
}

function PraiseItem({ praise, count }: PraiseItemProps) {
  return (
    <Flex align="center" justify="between" className="rounded-8 bg-sub py-8">
      <div className="flex items-center">
        <Image
          src={`/icons/48/${praise.imagePath}.svg`}
          alt={praise.title}
          width={48}
          height={48}
        />
        <Spacing size={12} direction="horizontal" />
        <p className="text-subtitle">{praise.title}</p>
      </div>
      <div className="text-secondary flex items-center">
        <h4 className="text-h4">{count}</h4>
        <Spacing size={8} direction="horizontal" />
        <span className="text-subtitle">명</span>
        <Spacing size={20} direction="horizontal" />
      </div>
    </Flex>
  );
}
