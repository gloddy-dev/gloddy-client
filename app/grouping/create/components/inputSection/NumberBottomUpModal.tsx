import { UseFormSetValue } from 'react-hook-form';

import { BottomFixedButton } from '@/components/common/Button';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';
import { NumberSwipePicker } from '@/components/common/SwipePicker';

import InputSection from './InputSection.server';

import type { InputType, ModalNameType } from '../../type';

interface LocationBottomUpModalProps {
  isModalOpen: boolean;
  openModal: (name: ModalNameType) => void;
  closeModal: () => void;
  value: number;
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
        title="모임 인원"
        onClick={() => openModal('meetingNumber')}
        value={value}
        placeholder="모임 인원을 설정해주세요."
      />

      <BottomUpModal
        isModalOpen={isModalOpen}
        snap={500}
        handleLeftButtonClick={() => openModal('meetingNumber')}
        onClose={closeModal}
        isRightButton
        text={<div className="text-18">모임 장소</div>}
      >
        <div className="relative h-full">
          <NumberSwipePicker
            setNumberValue={(value: number) => setValue('meetingNumber', value)}
            numberValue={value}
          />
        </div>
        <BottomFixedButton
          text="완료"
          onClick={() => {
            if (value === undefined) setValue('meetingNumber', 1);
            closeModal();
          }}
        />
      </BottomUpModal>
    </>
  );
}
