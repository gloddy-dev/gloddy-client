'use client';

import GroupingCard from './GroupingCard.client';

const DUMMY_GROUPING_DATA = [
  {
    image: '/assets/location.svg',
    title: 'Let’s go for a walk!',
    description: 'It’s a group that walks around, talks, and learns languages.',
    current: '2',
    total: '1',
    location: '동대문구 회기동',
    time: '04.27.FRI 7PM',
  },
  {
    image: '/assets/location.svg',
    title: 'Let’s go for a walk!',
    description: 'It’s a group that walks around, talks, and learns languages.',
    current: '2',
    total: '2',
    location: '동대문구 회기동',
    time: '04.27.FRI 7PM',
  },
  {
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
  return (
    <section>
      {DUMMY_GROUPING_DATA.map((groupingData) => (
        <GroupingCard
          onClick={() => console.log('What the hell')}
          {...groupingData}
          key={groupingData.total}
        />
      ))}
    </section>
  );
}
