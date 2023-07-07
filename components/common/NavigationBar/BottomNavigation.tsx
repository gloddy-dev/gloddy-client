'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

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

interface BottomNavigationProps {
  page: string;
}

export default function BottomNavigation({ page }: BottomNavigationProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 mx-auto flex max-w-[26.25rem] justify-around rounded-t-25 bg-white">
      {tabList.map((tab: TabType) => (
        <Link href={tab.name} key={tab.id}>
          <Image
            src={`/assets/tabIcon/${tab.name}${tab.name === page ? '_filled' : ''}.svg`}
            alt={tab.title}
            width={30}
            height={30}
          />
          <div
            className={clsx('text-10 font-700', {
              'text-gray4': tab.name !== page,
              'text-blue': tab.name === page,
            })}
          >
            {tab.title}
          </div>
        </Link>
      ))}
    </div>
  );
};
