'use client';
import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { useRouter } from 'next/navigation';

export default function NotificationHeader() {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <Header>
      <Header.Left className="px-1-4">
        <IconButton size="large" onClick={() => router.back()}>
          <Icon id="24-arrow_back" />
        </IconButton>
        <p>{t('notification')}</p>
      </Header.Left>
    </Header>
  );
}
