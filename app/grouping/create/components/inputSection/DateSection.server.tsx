import InputArea from './InputArea.server';
import { BottomFixedButton } from '@/components/common/Button';
import Calendar from '@/components/common/Calendar';
import { BottomSheet } from '@/components/common/Modal';
import { DivisionSpacing } from '@/components/common/Spacing';
import { TimeSwipePicker } from '@/components/common/SwipePicker';
import useModalState from '@/store/useModalStore';
import { UseFormSetValue } from 'react-hook-form';

import type { CreateMeetingRequestType } from '../../type';
import type { TimeType } from '@/types';

function getDayName(dayIndex: number) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return days[dayIndex];
}

function getMonthName(monthIndex: number) {
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  return months[monthIndex];
}

function displayDate(date: Date, time: TimeType) {
  const year = date.getFullYear();
  const month = getMonthName(date.getMonth());
  const day = date.getDate();
  const dayName = getDayName(date.getDay());
  return `${year}. ${month}. ${day} ${dayName} ${time.fromHour}:${time.fromMin} ${time.fromAmPm} ~ ${time.toHour}:${time.toMin} ${time.toAmPm}`;
}

interface DateSectionProps {
  value: {
    date: Date;
    time: TimeType;
  };
  setValue: UseFormSetValue<CreateMeetingRequestType>;
}

export default function DateSection({ value, setValue }: DateSectionProps) {
  const { modalName, openModal, closeModal } = useModalState();

  return (
    <>
      <InputArea
        title="모임 일시"
        onClick={() => openModal('meetingDate')}
        value={displayDate(value.date, value.time)}
        placeholder="모임 시간을 설정해주세요."
      />

      <BottomSheet
        isOpen={modalName === 'meetingDate'}
        snap={650}
        handleLeftButtonClick={() => openModal('meetingDate')}
        onClose={closeModal}
        isRightButton
        text={<div className="text-18">모임 일시</div>}
        isTapOutsideToClose
      >
        <div className="relative h-full">
          <div>
            <Calendar
              dateValue={value.date}
              setDateValue={(date: Date) => setValue('date', date)}
            />
            <DivisionSpacing />
            <TimeSwipePicker
              timeValue={value.time}
              setTimeValue={(time: TimeType) => setValue('time', time)}
            />
          </div>
        </div>
        <BottomFixedButton text="다음" onClick={() => openModal('meetingLocation')} />
      </BottomSheet>
    </>
  );
}
