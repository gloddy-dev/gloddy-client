'use client';

import AgreeBottomSheet from './components/AgreeBottomSheet.client';
import SchoolForm from './components/SchoolForm.client';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.client';
import { useModal } from '@/hooks/useModal';
import { useEffect } from 'react';

export default function Step2Component() {
  const { open } = useModal();
  useEffect(() => {
    open(({ exit }) => <AgreeBottomSheet close={exit} />);
  }, [open]);

  return (
    <main>
      <JoinTitleTextMessage>
        재학중인 학교
        <br />
        선택해주세요
      </JoinTitleTextMessage>
      <SchoolForm />
    </main>
  );
}
