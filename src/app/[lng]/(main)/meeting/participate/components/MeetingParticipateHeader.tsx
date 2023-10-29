'use client';
import { useTranslation } from '@/app/i18n/client';
import { Header } from '@/components/Header';
import { NavLink } from '@/components/NavLink';

export default function MeetingParticipateHeader() {
  const { t } = useTranslation('meeting');

  return (
    <Header>
      <Header.Left>
        <div className="flex gap-16 px-20">
          <NavLink href="/meeting/participate?tab=participating">{t('home.joinedGroup')}</NavLink>
          <NavLink href="/meeting/scrap" className="text-sign-sub">
            {t('home.favoritedGroup')}
          </NavLink>
        </div>
      </Header.Left>
    </Header>
  );
}
