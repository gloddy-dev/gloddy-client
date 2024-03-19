import Link from 'next/link';

import { serverTranslation } from '@/app/i18n';
import { Header } from '@/components/Header';

interface MeetingScrapHeaderProps {
  lng: string;
}

export default async function MeetingScrapHeader({ lng }: MeetingScrapHeaderProps) {
  const { t } = await serverTranslation(lng, 'meeting');

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
