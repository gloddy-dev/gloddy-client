'use client';
import { useTranslation } from '@/app/i18n/client';
import { Header } from '@/components/Header';
import Link from 'next/link';

export default function MeetingParticipateHeader() {
  const { t } = useTranslation('meeting');
  return (
    <Header>
      <Header.Left>
        <div className="flex gap-16 px-20">
          <Link href="/meeting/participate?tab=participating">{t('home.joinedGroup')}</Link>
          <Link href="/meeting/scrap" className="text-sign-sub">
            {t('home.favoritedGroup')}
          </Link>
        </div>
      </Header.Left>
    </Header>
  );
}
