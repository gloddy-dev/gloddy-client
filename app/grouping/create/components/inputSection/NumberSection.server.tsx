import InputArea from './InputArea.server';
import { BottomFixedButton } from '@/components/common/Button';
import { BottomSheet } from '@/components/common/Modal';
import { NumberSwipePicker } from '@/components/common/SwipePicker';
import useModalState from '@/store/useModalStore';
import { UseFormSetValue, useFormContext } from 'react-hook-form';

import type { CreateMeetingRequestType } from '../../type';

export default function NumberSection() {
  const { modalName, openModal, closeModal } = useModalState();
  const { watch, setValue } = useFormContext();

  return (
    <>
      <InputArea
        title="모임 인원"
        onClick={() => openModal('meetingNumber')}
        value={watch('meetingNumber') ? watch('meetingNumber') : undefined}
        placeholder="모임 인원을 설정해주세요."
      />

      <BottomSheet
        isOpen={modalName === 'meetingNumber'}
        snap={500}
        handleLeftButtonClick={() => openModal('meetingNumber')}
        onClose={closeModal}
        isRightButton
        text={<div className="text-18">모임 장소</div>}
        isTapOutsideToClose
      >
        <div className="relative h-full">
          <NumberSwipePicker
            setNumberValue={(value: number) => setValue('meetingNumber', value)}
            numberValue={watch('meetingNumber')}
          />
        </div>
        <BottomFixedButton
          text="완료"
          onClick={() => {
            if (!watch('meetingNumber')) setValue('meetingNumber', 1);
            closeModal();
          }}
        />
      </BottomSheet>
    </>
  );
}
