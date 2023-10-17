'use client';

import WriteModal from './WriteModal';
import { useTranslation } from '@/app/i18n/client';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { useModal } from '@/hooks/useModal';
import { useRouter } from 'next/navigation';

export default function WriteHeader() {
  const { t } = useTranslation('groupDetail');
  const router = useRouter();
  const { open, exit } = useModal();

  return (
    <Header className="px-4">
      <Header.Left>
        <Flex align="center">
          <IconButton
            size="large"
            onClick={() =>
              open(() => (
                <WriteModal
                  type="cancel"
                  onCancelClick={exit}
                  onOkClick={() => {
                    exit();
                    router.back();
                  }}
                />
              ))
            }
          >
            <Icon id="24-arrow_back" />
          </IconButton>
          <p className="text-subtitle-1">{t('writeArticle.headerTitle')}</p>
        </Flex>
      </Header.Left>
    </Header>
  );
}
