'use client';

import GroupingCard from './GroupingCard.client';
import { useGetGroups } from '@/apis/groups';

const DUMMY_GROUPING_DATA = [
  {
    id: '1',
    image: '/assets/location.svg',
    title: 'Let’s go for a walk!',
    description: 'It’s a group that walks around, talks, and learns languages.',
    current: '2',
    total: '1',
    location: '동대문구 회기동',
    time: '04.27.FRI 7PM',
  },
  {
    id: '2',
    image: '/assets/location.svg',
    title: 'Let’s go for a walk!',
    description: 'It’s a group that walks around, talks, and learns languages.',
    current: '2',
    total: '2',
    location: '동대문구 회기동',
    time: '04.27.FRI 7PM',
  },
  {
    id: '3',
    image: '/assets/location.svg',
    title: 'Let’s go for a walk!',
    description: 'It’s a group that walks around, talks, and learns languages.',
    current: '2',
    total: '3',
    location: '동대문구 회기동',
    time: '04.27.FRI 7PM',
  },
];

export default function GroupingCardList() {
  const { data } = useGetGroups();

  console.log(data);

  return (
    <section>
      {DUMMY_GROUPING_DATA.map((groupingData) => (
        <GroupingCard
          onClick={() => console.log('What the hell')}
          {...groupingData}
          key={groupingData.id}
        />
      ))}
    </section>
  );
}
