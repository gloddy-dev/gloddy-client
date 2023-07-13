import { UseFormSetValue } from 'react-hook-form';

import { Button } from '@/components/common/Button';
import Calendar from '@/components/common/Calendar';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';
import { DivisionSpacing } from '@/components/common/Spacing';
import TimeSwipePicker from '@/components/common/SwipePicker/TimeSwipePicker';
import { TimeType } from '@/types';

import { InputType } from '../../type';

interface DateBottomUpModalProps {
  isModalOpen: boolean;
  onPreviousClick: () => void;
  onNextClick: () => void;
  date: Date;
  time: TimeType;
  setValue: UseFormSetValue<InputType>;
  closeModal: () => void;
}
export default function DateBottomUpModal({
  isModalOpen,
  onPreviousClick,
  onNextClick,
  date,
  time,
  setValue,
  closeModal,
}: DateBottomUpModalProps) {
  return (
    <BottomUpModal
      isModalOpen={isModalOpen}
      snap={650}
      handleLeftButtonClick={onPreviousClick}
      onClose={closeModal}
      isRightButton
      text={<div className="text-18">모임 일시</div>}
    >
      <div className="relative h-full">
        <div>
          <Calendar dateValue={date} setDateValue={(date: Date) => setValue('date', date)} />
          <DivisionSpacing />
          <TimeSwipePicker
            timeValue={time}
            setTimeValue={(time: TimeType) => setValue('time', time)}
          />
        </div>
      </div>
      <Button
        text="다음"
        onClick={onNextClick}
        className="fixed inset-x-0 bottom-20 mx-auto max-w-380"
      />
    </BottomUpModal>
  );
}
