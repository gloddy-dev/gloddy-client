'use client';

import { PraisesResponse, useGetPraises } from '@/apis/profile';
import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Spacing } from '@/components/Spacing';

interface Praise {
  id: number;
  title: string;
  imagePath: 'happy' | 'kind' | 'active' | 'humor';
  dataPath: keyof PraisesResponse;
}

const praises: Praise[] = [
  {
    id: 1,
    title: 'calm',
    imagePath: 'happy',
    dataPath: 'totalCalmCount',
  },
  {
    id: 2,
    title: 'kind',
    imagePath: 'kind',
    dataPath: 'totalKindCount',
  },
  {
    id: 3,
    title: 'active',
    imagePath: 'active',
    dataPath: 'totalActiveCount',
  },
  {
    id: 4,
    title: 'humor',
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
  const { t } = useTranslation('profile');
  const { t: tc } = useTranslation('common');

  return (
    <Flex align="center" justify="between" className="rounded-8 bg-sub py-8">
      <div className="flex items-center">
        <Icon id={`48-${praise.imagePath}`} width={48} height={48} />
        <Spacing size={12} direction="horizontal" />
        <p className="text-subtitle">{t('praise.' + praise.title)}</p>
      </div>
      <div className="text-secondary flex items-center">
        <h4 className="text-h4">{count}</h4>
        <Spacing size={8} direction="horizontal" />
        <span className="text-subtitle">{tc('명')}</span>
        <Spacing size={20} direction="horizontal" />
      </div>
    </Flex>
  );
}
