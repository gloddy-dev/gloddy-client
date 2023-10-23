import { serverTranslation } from '@/app/i18n';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import Link from 'next/link';

interface CommunityHeaderProps {
  lng: string;
}

export default async function CommunityHeader({ lng }: CommunityHeaderProps) {
  const { t } = await serverTranslation(lng, 'common');

  return (
    <Header>
      <Header.Left className="pl-20">{t('community')}</Header.Left>
      <Header.Right className="pr-4">
        <Link href="/community/search">
          <IconButton size="large">
            <Icon id="24-search" />
          </IconButton>
        </Link>
      </Header.Right>
    </Header>
  );
}
