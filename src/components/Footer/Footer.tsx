'use client';

import { Icon } from '../Icon';
import cn from '@/utils/cn';
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
  page?: PageType;
  isSpacing?: boolean;
  spacingColor?: string;
}

export default function Footer({ page, isSpacing = true, spacingColor }: FooterProps) {
  const isSelected = (tab: TabType) => tab.name === page;

  return (
    <>
      <footer className="fixed inset-x-0 bottom-0 mx-auto flex max-w-450 touch-pan-x rounded-t-24 bg-white pb-8 pt-12 shadow-navigation">
        {tabList.map((tab: TabType) => (
          <Link
            href={tab.url}
            key={tab.id}
            className={cn('flex w-full flex-col items-center text-center text-caption', {
              'text-sign-brand': isSelected(tab),
              'text-sign-tertiary': !isSelected(tab),
            })}
            scroll={false}
          >
            <Icon
              id={`32-footer-${tab.name}${isSelected(tab) ? '_selected' : '_default'}`}
              width={32}
              height={32}
            />
            <p>{tab.title}</p>
          </Link>
        ))}
      </footer>
      {isSpacing && <div className="h-70" style={{ backgroundColor: spacingColor }} />}
    </>
  );
}
