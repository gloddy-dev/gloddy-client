'use client';

import cn from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

import type { PageType } from '@/types';

interface TabType {
  id: string;
  name: PageType;
  title: string;
  url: string;
}

const tabList: TabType[] = [
  {
    id: '1',
    name: 'grouping',
    title: '매칭',
    url: '/grouping',
  },
  {
    id: '2',
    name: 'meeting',
    title: '나의모임',
    url: '/meeting/participate?tab=participating',
  },
  {
    id: '3',
    name: 'profile',
    title: '프로필',
    url: '/profile',
  },
];

interface FooterProps {
  page: PageType;
  isSpacing?: boolean;
}

export default function Footer({ page, isSpacing = true }: FooterProps) {
  const isSelected = (tab: TabType) => tab.name === page;

  return (
    <>
      <footer className="fixed inset-x-0 bottom-0 mx-auto flex max-w-450 rounded-t-24 bg-white pb-8 pt-12 shadow-navigation">
        {tabList.map((tab: TabType) => (
          <Link
            href={tab.url}
            key={tab.id}
            className={cn('flex w-full flex-col items-center text-center text-caption', {
              'text-sign-brand': isSelected(tab),
              'text-sign-tertiary': !isSelected(tab),
            })}
          >
            <Image
              src={`/icons/32/footer/${tab.name}${
                tab.name === page ? '_selected' : '_default'
              }.svg`}
              alt={tab.title}
              width={32}
              height={32}
            />
            <p>{tab.title}</p>
          </Link>
        ))}
      </footer>
      {isSpacing && <div className="h-70" />}
    </>
  );
}
