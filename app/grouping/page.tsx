'use client';

import Image from 'next/image';
import Link from 'next/link';

import { BottomNavigationBar } from '@/components/common/NavigationBar';
import Spacing from '@/components/common/Spacing';

import GroupingCard from './components/GroupingCard';
import GroupingTopNavigationBar from './components/GroupingTopNavigationBar';

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
    <div className="relative h-full">
      <GroupingTopNavigationBar />

      <Spacing size={18} />

      <section>
        {DUMMY_GROUPING_DATA.map((mocks) => (
          <GroupingCard onClick={() => console.log('What the hell')} {...mocks} key={mocks.total} />
        ))}
      </section>

      <section className="absolute bottom-80 right-20">
        <Link href="/grouping/create">
          <Image src="/assets/plus.svg" alt="add_icon" width={40} height={40} />
        </Link>
      </section>

      <BottomNavigationBar page="grouping" />
    </div>
  );
}
