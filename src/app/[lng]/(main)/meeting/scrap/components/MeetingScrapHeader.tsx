'use client';
import { useTranslation } from '@/app/i18n/client';
import { Header } from '@/components/Header';
import { NavLink } from '@/components/NavLink';

export default function MeetingScrapHeader() {
  const { t } = useTranslation('meeting');

  return (
    <Header>
      <Header.Left>
        <div className="flex gap-16 px-20">
          <NavLink href="/meeting/participate?tab=participating" className="text-sign-sub">
            {t('home.joinedGroup')}
          </NavLink>
          <NavLink href="/meeting/scrap">{t('home.favoritedGroup')}</NavLink>
        </div>
      </Header.Left>
    </Header>
  );
}
