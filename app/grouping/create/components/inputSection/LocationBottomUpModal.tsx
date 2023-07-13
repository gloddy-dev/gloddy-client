import { UseFormSetValue } from 'react-hook-form';

import { Button } from '@/components/common/Button';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';

import { InputType } from '../../type';

// Location앞에

interface LocationBottomUpModalProps {
  isModalOpen: boolean;
  onPreviousClick: () => void;
  onNextClick: () => void;
  location: string;
  setValue: UseFormSetValue<InputType>;
  closeModal: () => void;
}
export default function LocationBottomUpModal({
  isModalOpen,
  onPreviousClick,
  onNextClick,
  setValue,
  closeModal,
  location,
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
        <div></div>
      </div>
      <Button
        text="다음"
        onClick={onNextClick}
        className="fixed inset-x-0 bottom-20 mx-auto max-w-380"
      />
    </BottomUpModal>
  );
}
