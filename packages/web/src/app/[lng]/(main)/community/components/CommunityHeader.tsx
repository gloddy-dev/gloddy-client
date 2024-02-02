import { serverTranslation } from '@/app/i18n';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { NavLink } from '@/components/NavLink';

interface CommunityHeaderProps {
  lng: string;
}

export default async function CommunityHeader({ lng }: CommunityHeaderProps) {
  const { t } = await serverTranslation(lng, 'common');

  return (
    <Header>
      <Header.Left className="pl-20">{t('community')}</Header.Left>
      {/* <Header.Right className="pr-4">
        <NavLink href="/community/search">
          <IconButton size="large">
            <Icon id="24-search" />
          </IconButton>
        </NavLink>
      </Header.Right> */}
    </Header>
  );
}
