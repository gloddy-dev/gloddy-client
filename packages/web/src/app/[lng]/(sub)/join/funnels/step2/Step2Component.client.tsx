'use client';

import AgreeBottomSheet from './components/AgreeBottomSheet.client';
import SchoolInput from './components/SchoolInput';
import SchoolResultList from './components/SchoolResult';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.client';

import { useTranslation } from '@/app/i18n/client';
import { LocalSuspenseErrorBoundary } from '@/components/ErrorBoundary';
import { useDidMount } from '@/hooks';
import { useModal } from '@/hooks';

export default function Step2Component() {
  const { t } = useTranslation('join');
  const { open, close } = useModal();

  useDidMount(() => {
    open(({ isOpen }) => <AgreeBottomSheet onClose={close} isOpen={isOpen} />);
  });

  return (
    <main>
      <JoinTitleTextMessage>{t('chooseSchool')}</JoinTitleTextMessage>
      <SchoolInput />
      <LocalSuspenseErrorBoundary>
        <SchoolResultList />
      </LocalSuspenseErrorBoundary>
    </main>
  );
}
