import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import useAppRouter from '@/hooks/useAppRouter';
import { useRouter } from 'next/navigation';

interface CreateHeaderProps {
  currentStep: 'main' | 'meetDate';
}

export default function CreateHeader({ currentStep }: CreateHeaderProps) {
  const { t } = useTranslation('grouping');
  const router = useRouter();
  const { back } = useAppRouter();

  return (
    <Header className="px-4">
      <Header.Left>
        <IconButton size="large" onClick={back}>
          <Icon id="24-close" />
        </IconButton>
        {currentStep === 'main' && <p>{t('create.headerTitle')}</p>}
      </Header.Left>
    </Header>
  );
}
