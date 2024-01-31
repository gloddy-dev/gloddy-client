import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';

interface DeleteHeaderProps {
  onPrevClick: () => void;
  icon: 'close' | 'arrow_back';
}
export default function DeleteHeader({ onPrevClick, icon }: DeleteHeaderProps) {
  const { t } = useTranslation('profile');

  return (
    <Header>
      <Header.Left>
        <IconButton size="large" onClick={onPrevClick}>
          <Icon id={`24-${icon}`} />
        </IconButton>
        <p>{t('settings.accountDeletion')}</p>
      </Header.Left>
    </Header>
  );
}
