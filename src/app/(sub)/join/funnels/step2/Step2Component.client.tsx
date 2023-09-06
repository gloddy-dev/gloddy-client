'use client';

import AgreeBottomSheet from './components/AgreeBottomSheet.client';
import SchoolForm from './components/SchoolForm.client';
import JoinTitleTextMessage from '../../components/JoinTitleTextMessage.client';
import { useDidMount } from '@/hooks/common/useDidMount';
import { useModal } from '@/hooks/useModal';

export default function Step2Component() {
  const { open, close } = useModal();

  useDidMount(() => {
    open(({ isOpen }) => <AgreeBottomSheet onClose={close} isOpen={isOpen} />);
  });

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
