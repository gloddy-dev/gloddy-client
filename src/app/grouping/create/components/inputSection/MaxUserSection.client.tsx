'use client';
import { useCreateGroupContext } from '../CreateGroupContext';
import InputArea from '../InputArea.server';
import { BottomFixedButton } from '@/components/common/Button';
import { BottomSheet } from '@/components/common/Modal';
import { NumberSwipePicker } from '@/components/common/SwipePicker';
import useModalState from '@/store/useModalStore';

export default function MaxUserSection() {
  const { modalName, openModal, closeModal } = useModalState();
  const { watch, setValue, getFieldState } = useCreateGroupContext();

  return (
    <>
      <InputArea
        title="모임 인원"
        onClick={() => openModal('maxUser')}
        value={getFieldState('maxUser').isDirty ? `최대 ${watch('maxUser')}명` : ''}
        placeholder="모임 인원을 설정해주세요."
      />

      <BottomSheet
        isOpen={modalName === 'maxUser'}
        snap={500}
        handleLeftButtonClick={() => openModal('maxUser')}
        onClose={closeModal}
        isRightButton
        text={<div className="text-18">모임 인원</div>}
        isTapOutsideToClose
        disableDrag
      >
        <div className="relative h-full">
          <NumberSwipePicker
            setNumberValue={(value: number) => setValue('maxUser', value, { shouldDirty: true })}
            numberValue={watch('maxUser')}
          />
        </div>
        <BottomFixedButton
          text="완료"
          onClick={() => {
            if (!watch('maxUser')) setValue('maxUser', 1);
            closeModal();
          }}
        />
      </BottomSheet>
    </>
  );
}
