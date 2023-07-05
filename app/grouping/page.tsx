'use client';

import GroupingCard from '@/app/grouping/GroupingCard';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const mockData = [
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

const Grouping = () => {
  return (
    <div className="flex w-full items-center px-24">
      <div className="flex flex-col w-full">
        {React.Children.toArray(
          mockData.map((mocks) => (
            <GroupingCard onClick={() => console.log('What the hell')} {...mocks} />
          ))
        )}
      </div>
      <div className="fixed bottom-120 right-20 z-20">
        <Link href="/grouping/create-meeting">
          <Image src="/assets/add.svg" alt="add_icon" width={51} height={51} />
        </Link>
      </div>
    </div>
  );
};

export default Grouping;
