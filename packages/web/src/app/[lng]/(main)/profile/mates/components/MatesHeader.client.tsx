'use client';
import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { useAppRouter } from '@/hooks';

export default function MatesHeader() {
  const { t } = useTranslation('profile');
  const { back } = useAppRouter();

  return (
    <Header>
      <Header.Left className="px-4">
        <IconButton size="large" onClick={back}>
          <Icon id="24-arrow_back" />
        </IconButton>

        <p className="text-subtitle-1">{t('home.reviewCount')}</p>
      </Header.Left>
    </Header>
  );
}
