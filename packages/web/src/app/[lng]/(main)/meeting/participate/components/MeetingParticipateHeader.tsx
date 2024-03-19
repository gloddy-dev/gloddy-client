import Link from 'next/link';

import { serverTranslation } from '@/app/i18n';
import { Header } from '@/components/Header';

interface MeetingParticipateHeaderProps {
  lng: string;
}

export default async function MeetingParticipateHeader({ lng }: MeetingParticipateHeaderProps) {
  const { t } = await serverTranslation(lng, 'meeting');

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
