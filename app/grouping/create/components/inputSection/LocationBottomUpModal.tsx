import { UseFormSetValue } from 'react-hook-form';

import { BottomFixedButton } from '@/components/common/Button';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';

import { InputType, ModalNameType } from '../../type';
import InputSection from './InputSection.server';

interface LocationBottomUpModalProps {
  isModalOpen: boolean;
  openModal: (name: ModalNameType) => void;
  closeModal: () => void;
  value: string;
  setValue: UseFormSetValue<InputType>;
}
export default function LocationBottomUpModal({
  isModalOpen,
  openModal,
  closeModal,
  value,
  setValue,
}: LocationBottomUpModalProps) {
  return (
    <>
      <InputSection
        title="모임 장소"
        onClick={() => openModal('meetingLocation')}
        value={value}
        placeholder="모임 장소를 설정해주세요."
      />

      <BottomUpModal
        isModalOpen={isModalOpen}
        snap={500}
        handleLeftButtonClick={() => openModal('meetingLocation')}
        onClose={closeModal}
        isRightButton
        text={<div className="text-18">모임 장소</div>}
      >
        <div className="relative h-full">
          <div></div>
        </div>
        <BottomFixedButton text="다음" onClick={() => openModal('meetingNumber')} />
      </BottomUpModal>
    </>
  );
}
