'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ButtonAnimation } from '../Animation';
import { Icon } from '../Icon';
import { NavLink } from '../NavLink';

import type { PageType } from '@/types';

import { useTranslation } from '@/app/i18n/client';
import cn from '@/utils/cn';

interface TabType {
  name: PageType;
  title: string;
  url: string;
}

const tabList: TabType[] = [
  {
    name: 'grouping',
    title: '매칭',
    url: '/grouping',
  },
  {
    name: 'meeting',
    title: '나의모임',
    url: '/meeting/participate?tab=participating',
  },
  {
    name: 'community',
    title: '커뮤니티',
    url: '/community?tab=all',
  },
  {
    name: 'profile',
    title: '프로필',
    url: '/profile',
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
          <ButtonAnimation
            key={`${tab.name}-${index}`}
            className={cn('text-caption flex w-full flex-col text-center', {
              'text-sign-brand': isSelected(tab),
              'text-sign-tertiary': !isSelected(tab),
            })}
          >
            <Link prefetch={true} replace={true} href={tab.url} scroll={false}>
              <Icon
                id={`32-footer-${tab.name}_default`}
                width={32}
                height={32}
                className="mx-auto"
              />
              <p>{t(tab.name)}</p>
            </Link>
          </ButtonAnimation>
        ))}
      </footer>
      {isSpacing && <div className="h-70" style={{ backgroundColor: spacingColor }} />}
    </>
  );
}
