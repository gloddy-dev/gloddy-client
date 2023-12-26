'use client';

import WriteModal from '../components/WriteModal';
import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import useAppRouter from '@/hooks/useAppRouter';
import { useModal } from '@/hooks/useModal';

export default function WriteHeader() {
  const { t } = useTranslation('community');
  const { back } = useAppRouter();
  const { open, exit } = useModal();

  return (
    <Header>
      <Header.Left>
        <IconButton
          size="large"
          onClick={() =>
            open(() => (
              <WriteModal
                type="cancel"
                onCancelClick={exit}
                onOkClick={() => {
                  exit();
                  back();
                }}
              />
            ))
          }
        >
          <Icon id="24-arrow_back" />
        </IconButton>
        <p className="w-full truncate">{t('create.headerTitle')}</p>
      </Header.Left>
    </Header>
  );
}
