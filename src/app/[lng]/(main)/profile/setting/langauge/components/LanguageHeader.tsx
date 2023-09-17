'use client';
import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { useRouter } from 'next/navigation';

export default function LangaugeHeader() {
  const { t } = useTranslation('profile');
  const router = useRouter();
  return (
    <Header>
      <Header.Left className="px-4">
        <IconButton size="large" onClick={() => router.back()}>
          <Icon id="24-close" />
        </IconButton>
        <p className="text-subtitle-1">{t('settings.customerService')}</p>
      </Header.Left>
    </Header>
  );
}
