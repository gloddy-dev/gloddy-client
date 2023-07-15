import InputArea from './InputArea.server';
import { BottomFixedButton } from '@/components/common/Button';
import { BottomUpModal } from '@/components/common/Modal';
import { NumberSwipePicker } from '@/components/common/SwipePicker';
import { UseFormSetValue } from 'react-hook-form';

import type { CreateMeetingRequestType, ModalNameType } from '../../type';

interface NumberSectionProps {
  isModalOpen: boolean;
  openModal: (name: ModalNameType) => void;
  closeModal: () => void;
  value: number;
  setValue: UseFormSetValue<CreateMeetingRequestType>;
}
export default function NumberSection({
  isModalOpen,
  openModal,
  closeModal,
  value,
  setValue,
}: NumberSectionProps) {
  return (
    <>
      <InputArea
        title="모임 인원"
        onClick={() => openModal('meetingNumber')}
        value={value ? value : undefined}
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
            if (!value) setValue('meetingNumber', 1);
            closeModal();
          }}
        />
      </BottomUpModal>
    </>
  );
}
