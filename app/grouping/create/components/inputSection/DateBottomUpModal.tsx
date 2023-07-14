import { UseFormSetValue } from 'react-hook-form';

import { BottomFixedButton } from '@/components/common/Button';
import Calendar from '@/components/common/Calendar';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';
import { DivisionSpacing } from '@/components/common/Spacing';
import TimeSwipePicker from '@/components/common/SwipePicker/TimeSwipePicker';

import InputSection from './InputSection.server';

import type { TimeType } from '@/types';

import type { InputType, ModalNameType } from '../../type';

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

interface DateBottomUpModalProps {
  openModal: (modalName: ModalNameType) => void;
  isModalOpen: boolean;
  value: {
    date: Date;
    time: TimeType;
  };
  setValue: UseFormSetValue<InputType>;
  closeModal: () => void;
}

export default function DateBottomUpModal({
  isModalOpen,
  closeModal,
  openModal,
  value,
  setValue,
}: DateBottomUpModalProps) {
  return (
    <>
      <InputSection
        title="모임 일시"
        onClick={() => openModal('meetingDate')}
        value={displayDate(value.date, value.time)}
        placeholder="모임 시간을 설정해주세요."
      />

      <BottomUpModal
        isModalOpen={isModalOpen}
        snap={650}
        handleLeftButtonClick={() => openModal('meetingDate')}
        onClose={closeModal}
        isRightButton
        text={<div className="text-18">모임 일시</div>}
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
      </BottomUpModal>
    </>
  );
}
