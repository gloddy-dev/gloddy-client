'use client';

import AgreeBottomSheet from './components/AgreeBottomSheet.client';
import SchoolForm from './components/SchoolForm.client';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.client';
import { useDidMount } from '@/hooks/common/useDidMount';
import useBottomSheet from '@/hooks/useBottomSheet';

export default function Step2Component() {
  const { isOpen, open, close } = useBottomSheet();

  useDidMount(() => {
    open();
  });

  return (
    <main>
      <JoinTitleTextMessage>
        재학중인 학교
        <br />
        선택해주세요
      </JoinTitleTextMessage>
      <SchoolForm />
      {isOpen && <AgreeBottomSheet onClose={close} />}
    </main>
  );
}
