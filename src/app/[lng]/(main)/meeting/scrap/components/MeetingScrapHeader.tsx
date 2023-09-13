'use client';
import { useTranslation } from '@/app/i18n/client';
import { Header } from '@/components/Header';
import Link from 'next/link';

export default function MeetingScrapHeader() {
  const { t } = useTranslation('meeting');

  return (
    <Header>
      <Header.Left>
        <div className="flex gap-16 px-20">
          <Link href="/meeting/participate?tab=participating" className="text-sign-sub">
            {t('home.joinedGroup')}
          </Link>
          <Link href="/meeting/scrap">{t('home.favoritedGroup')}</Link>
        </div>
      </Header.Left>
    </Header>
  );
}
