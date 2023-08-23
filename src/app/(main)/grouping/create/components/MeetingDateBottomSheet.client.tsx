'use client';

import { CreateGroupContextValue } from '../type';
import { BottomFixedButton } from '@/components/common/Button';
import Calendar from '@/components/common/Calendar';
import { TimeSwipePicker } from '@/components/common/SwipePicker';
import { Divider } from '@/components/Divider';
import { BottomSheet } from '@/components/Modal';
import { TimeType } from '@/types';
import { UseFormSetValue } from 'react-hook-form';

interface MeetingDateBottomSheetProps {
  dateValue: Date;
  timeValue: TimeType;
  setValue: UseFormSetValue<CreateGroupContextValue>;
  openNext: () => void;
  closeCurrent: () => void;
}

export default function MeetingDateBottomSheet({
  dateValue,
  timeValue,
  setValue,
  openNext,
  closeCurrent,
}: MeetingDateBottomSheetProps) {
  return (
    <BottomSheet
      snap={650}
      onClose={closeCurrent}
      isRightButton
      title="모임 일시"
      isTapOutsideToClose
      disableDrag
    >
      <div className="relative h-full">
        <div>
          <Calendar
            dateValue={dateValue}
            setDateValue={(date: Date) => setValue('date', date, { shouldDirty: true })}
          />
          <Divider size={20} />
          <TimeSwipePicker
            timeValue={timeValue}
            setTimeValue={(time: TimeType) => setValue('time', time, { shouldDirty: true })}
          />
        </div>
      </div>
      <BottomFixedButton text="다음" onClick={openNext} />
    </BottomSheet>
  );
}
