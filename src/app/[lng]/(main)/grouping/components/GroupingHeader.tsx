'use client';

import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';

export default function GroupingHeader() {
  const { t } = useTranslation('grouping');

  return (
    <Header>
      <Header.Left className="pl-20">{t('headerTitle')}</Header.Left>
      <Header.Right className="pr-4">
        <IconButton
          size="large"
          onClick={() => window.open('https://forms.gle/YJvNzLniP8he4xv68', '_blank')}
        >
          <Icon id="24-comments" />
        </IconButton>
      </Header.Right>
    </Header>
  );
}
