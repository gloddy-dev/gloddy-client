'use client';
import { useCreateGroupContext } from '../CreateGroupContext';
import InputArea from '../InputArea.server';
import { BottomFixedButton } from '@/components/common/Button';
import BottomSheet from '@/components/common/Modal/BottomSheet';
import useModalState from '@/store/useModalStore';

export default function LocationSection() {
  const { modalName, openModal, closeModal } = useModalState();
  const { watch, setValue } = useCreateGroupContext();

  return (
    <>
      <InputArea
        title="모임 장소"
        onClick={() => openModal('meetingLocation')}
        value={''} // TODO : 지도 api 연동 후 추가
        placeholder="모임 장소를 설정해주세요."
      />

      <BottomSheet
        isOpen={modalName === 'meetingLocation'}
        snap={500}
        handleLeftButtonClick={() => openModal('meetingLocation')}
        onClose={closeModal}
        isRightButton
        text={<div className="text-18">모임 장소</div>}
        isTapOutsideToClose
      >
        <div className="relative h-full">
          <div></div>
        </div>
        <BottomFixedButton text="다음" onClick={() => openModal('maxUser')} />
      </BottomSheet>
    </>
  );
}
