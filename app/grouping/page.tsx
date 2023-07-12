'use client';

import Image from 'next/image';
import Link from 'next/link';

import GroupingCard from '@/app/grouping/GroupingCard';
import BottomNavigation from '@/components/common/NavigationBar/BottomNavigation';

const DUMMY_GROUPING_DATA = [
  {
    image: '/assets/location.svg',
    title: 'Let’s go for a walk!',
    description: 'It’s a group that walks around, talks, and learns languages.',
    current: '2',
    total: '4',
    location: '동대문구 회기동',
    time: '04.27.FRI 7PM',
  },
  {
    image: '/assets/location.svg',
    title: 'Let’s go for a walk!',
    description: 'It’s a group that walks around, talks, and learns languages.',
    current: '2',
    total: '4',
    location: '동대문구 회기동',
    time: '04.27.FRI 7PM',
  },
  {
    image: '/assets/location.svg',
    title: 'Let’s go for a walk!',
    description: 'It’s a group that walks around, talks, and learns languages.',
    current: '2',
    total: '4',
    location: '동대문구 회기동',
    time: '04.27.FRI 7PM',
  },
];

export default function Grouping() {
  return (
    <div className="relative h-full p-20">
      <section className="mb-17 flex justify-between text-16 font-700">
        <p>그루핑</p>
        <Image src="/assets/search_navbar.svg" alt="search" width={15} height={15} />
      </section>

      <section>
        {DUMMY_GROUPING_DATA.map((mocks) => (
          <GroupingCard onClick={() => console.log('What the hell')} {...mocks} key={mocks.total} />
        ))}
      </section>

      <section className="absolute bottom-80 right-20">
        <Link href="/grouping/create-meeting">
          <Image src="/assets/plus.svg" alt="add_icon" width={40} height={40} />
        </Link>
      </section>

      <BottomNavigation page="grouping" />
    </div>
  );
}
