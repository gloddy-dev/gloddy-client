'use client';
import { useTranslation } from 'react-i18next';

import { ButtonAnimation } from '../Animation';
import { Icon } from '../Icon';
import { NavLink } from '../NavLink';

import type { PageType } from '@/types';

import cn from '@/utils/cn';
import { getIsAndroid } from '@/utils/getIsAndroid';
import { getIsIOS } from '@/utils/getIsIOS';

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
    name: 'community',
    title: '커뮤니티',
    url: '/community?tab=all',
  },
  {
    id: '4',
    name: 'profile',
    title: '프로필',
    url: '/profile',
  },
];

interface FooterProps {
  lng: string;
  page?: PageType;
  isSpacing?: boolean;
  spacingColor?: string;
}

export default function Footer({ page, isSpacing = true, spacingColor }: FooterProps) {
  const { t } = useTranslation('common');
  const isSelected = (tab: TabType) => tab.name === page;

  const isIOS = getIsIOS();
  const isAndroid = getIsAndroid();

  if (isIOS || isAndroid) return null;
  else
    return (
      <>
        <footer className="max-w-450 rounded-t-24 shadow-navigation fixed inset-x-0 bottom-0 mx-auto flex touch-pan-x bg-white pb-8 pt-12">
          {tabList.map((tab: TabType) => (
            <ButtonAnimation
              key={tab.id}
              className={cn('text-caption flex w-full flex-col text-center', {
                'text-sign-brand': isSelected(tab),
                'text-sign-tertiary': !isSelected(tab),
              })}
            >
              <NavLink isReplace href={tab.url} scroll={false}>
                <Icon
                  id={`32-footer-${tab.name}${isSelected(tab) ? '_selected' : '_default'}`}
                  width={32}
                  height={32}
                  className="mx-auto"
                />
                <p>{t(tab.name)}</p>
              </NavLink>
            </ButtonAnimation>
          ))}
        </footer>
        {isSpacing && <div className="h-70" style={{ backgroundColor: spacingColor }} />}
      </>
    );
}
