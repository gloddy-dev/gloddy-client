'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import type { PageType } from '@/types';

import { useTranslation } from '@/app/i18n/client';
import FooterGrouping from '@/assets/svgs/32-footer-grouping.svg';
import FooterCommunity from '@/assets/svgs/32-footer-grouping.svg';
import FooterMeeting from '@/assets/svgs/32-footer-meeting.svg';
import FooterProfile from '@/assets/svgs/32-footer-profile.svg';
import cn from '@/utils/cn';

interface TabType {
  name: PageType;
  title: string;
  url: string;
  icon: ReactNode;
}

const tabList: TabType[] = [
  {
    name: 'grouping',
    title: '매칭',
    url: '/grouping',
    icon: <FooterGrouping className={'mx-auto'} />,
  },
  {
    name: 'meeting',
    title: '나의모임',
    url: '/meeting/participate?tab=participating',
    icon: <FooterMeeting className={'mx-auto'} />,
  },
  {
    name: 'community',
    title: '커뮤니티',
    url: '/community?tab=all',
    icon: <FooterCommunity className={'mx-auto'} />,
  },
  {
    name: 'profile',
    title: '프로필',
    url: '/profile',
    icon: <FooterProfile className={'mx-auto'} />,
  },
];

interface FooterProps {
  isSpacing?: boolean;
  spacingColor?: string;
}

export default function Footer({ isSpacing = true, spacingColor }: FooterProps) {
  const pathname = usePathname();
  const { t } = useTranslation('common');
  const isSelected = (tab: TabType) => tab.name === pathname.split('/')[2];

  // `detail`이 경로에 포함되어 있을 경우 렌더링하지 않음
  if (pathname.includes('/detail/')) {
    return null;
  }

  return (
    <>
      <footer className="max-w-450 rounded-t-24 shadow-navigation fixed inset-x-0 bottom-0 mx-auto flex touch-pan-x bg-white pb-8 pt-12">
        {tabList.map((tab: TabType, index) => (
          <div
            key={`${tab.name}-${index}`}
            className={cn('text-caption flex w-full flex-col text-center', {
              'text-sign-brand': isSelected(tab),
              'text-sign-tertiary': !isSelected(tab),
            })}
          >
            <Link prefetch={true} replace={true} href={tab.url} scroll={false}>
              {tab.icon}
              <p>{t(tab.name)}</p>
            </Link>
          </div>
        ))}
      </footer>
      {isSpacing && <div className="h-70" style={{ backgroundColor: spacingColor }} />}
    </>
  );
}
