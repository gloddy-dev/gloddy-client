import { UseFormSetValue } from 'react-hook-form';

import { Button } from '@/components/common/Button';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';
import { NumberSwipePicker } from '@/components/common/SwipePicker';

import { InputType } from '../../type';

// Location앞에

interface LocationBottomUpModalProps {
  isModalOpen: boolean;
  onPreviousClick: () => void;
  onNextClick: () => void;
  number: number;
  setValue: UseFormSetValue<InputType>;
  closeModal: () => void;
}
export default function LocationBottomUpModal({
  isModalOpen,
  onPreviousClick,
  onNextClick,
  setValue,
  closeModal,
  number,
}: LocationBottomUpModalProps) {
  return (
    <BottomUpModal
      isModalOpen={isModalOpen}
      snap={500}
      handleLeftButtonClick={onPreviousClick}
      onClose={closeModal}
      isRightButton
      text={<div className="text-18">모임 장소</div>}
    >
      <div className="relative h-full">
        <NumberSwipePicker
          setNumberValue={(value: number) => setValue('meetingNumber', value)}
          numberValue={number}
        />
      </div>
      <Button
        text="완료"
        onClick={onNextClick}
        className="fixed inset-x-0 bottom-20 mx-auto max-w-380"
      />
    </BottomUpModal>
  );
}
