'use client';
import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import useAppRouter from '@/hooks/useAppRouter';
import { useRouter } from 'next/navigation';

export default function ApplyHeader() {
  const { t } = useTranslation('groupDetail');
  const { back } = useAppRouter();

  return (
    <Header className="px-4">
      <Header.Left>
        <Flex align="center">
          <IconButton size="large" onClick={() => back()}>
            <Icon id="24-arrow_back" />
          </IconButton>
          <p>{t('apply.headerTitle')}</p>
        </Flex>
      </Header.Left>
    </Header>
  );
}
