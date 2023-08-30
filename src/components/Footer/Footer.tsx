'use client';

import cn from '@/utils/cn';
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

interface FooterProps {
  page: PageType;
}

export default function Footer({ page }: FooterProps) {
  const isSelected = (tab: TabType) => tab.name === page;

  return (
    <footer className="fixed inset-x-0 bottom-0 mx-auto flex max-w-450 rounded-t-24 bg-white pb-8 pt-12 shadow-navigation">
      {tabList.map((tab: TabType) => (
        <Link
          href={tab.name}
          key={tab.id}
          className="flex w-full flex-col items-center text-caption"
        >
          <Image
            src={`/icons/32/footer/${tab.name}${tab.name === page ? '_selected' : '_default'}.png`}
            alt={tab.title}
            width={32}
            height={32}
          />
          <div
            className={cn('text-10', {
              'text-sign-brand': isSelected(tab),
              'text-sign-tertiary': !isSelected(tab),
            })}
          >
            {tab.title}
          </div>
        </Link>
      ))}
    </footer>
  );
}
