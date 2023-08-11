'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import type { PageType } from '@/types';

interface TabType {
  id: string;
  name: string;
  title: string;
}

const tabList: TabType[] = [
  {
    id: '1',
    name: 'grouping',
    title: '그루핑',
  },
  {
    id: '2',
    name: 'meeting',
    title: '나의모임',
  },
  {
    id: '3',
    name: 'profile',
    title: '프로필',
  },
];

interface BottomNavigationBarProps {
  page: PageType;
}

export default function BottomNavigationBar({ page }: BottomNavigationBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 mx-auto flex h-80 max-w-450 justify-between gap-20 rounded-t-25 bg-white px-40 py-20">
      {tabList.map((tab: TabType) => (
        <Link href={tab.name} key={tab.id} className="flex flex-col items-center">
          <Image
            src={`/assets/tabIcon/${tab.name}${tab.name === page ? '_filled' : ''}.svg`}
            alt={tab.title}
            width={30}
            height={30}
          />
          <div
            className={clsx(
              'text-10',
              tab.name === page ? 'font-700 text-blue' : 'font-400 text-gray4'
            )}
          >
            {tab.title}
          </div>
        </Link>
      ))}
    </div>
  );
}
