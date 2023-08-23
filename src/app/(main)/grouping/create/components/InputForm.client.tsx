'use client';

import { useCreateGroupContext } from './CreateGroupContext';
import InputArea from './InputArea.server';
import SubmitSection from './inputSection/SubmitSection';
import { CreateGroupContextValue } from '../type';
import { BottomFixedButton } from '@/components/common/Button';
import Calendar from '@/components/common/Calendar';
import ImageFrame from '@/components/common/ImageFrame';
import { DivisionSpacing, Spacing } from '@/components/common/Spacing';
import { NumberSwipePicker, TimeSwipePicker } from '@/components/common/SwipePicker';
import { BottomSheet } from '@/components/Modal';
import { TextFieldController } from '@/components/TextField';
import { useModal } from '@/hooks/useModal';
import { useRef } from 'react';
import { UseFormSetValue } from 'react-hook-form';

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

export default function InputForm() {
  const imgRef = useRef<HTMLInputElement>(null);

  const { open: openMeetDateBottomSheet, close: closeMeetDateBottomSheet } = useModal();
  const { open: openLocationBottomSheet, close: closeLocationBottomSheet } = useModal();
  const { open: openMaxUserBottomSheet, close: closeMaxUserBottomSheet } = useModal();

  const hookForm = useCreateGroupContext();
  const { watch, setValue, getFieldState, register } = hookForm;

  const isMeetingDateDirty = getFieldState('date').isDirty || getFieldState('time').isDirty;

  return (
    <form>
      <ImageFrame
        setImageUrl={(value: string) => setValue('imageUrl', value)}
        shape="square"
        ref={imgRef}
      />

      <p className="text-secondary px-4 text-subtitle-3">방 제목</p>
      <Spacing size={4} />
      <TextFieldController
        placeholder="제목을 입력해주세요"
        hookForm={hookForm}
        register={register('title', {
          required: true,
          maxLength: 20,
        })}
        maxCount={20}
      />

      <Spacing size={15} />

      <div className="flex justify-between">
        <div className="mb-5 text-14">활동 소개글</div>
        <div className="text-12 text-gray2"></div>
      </div>
      <TextFieldController
        placeholder="내용을 입력해주세요."
        register={register('content', {
          required: true,
        })}
        hookForm={hookForm}
        as="textarea"
        maxCount={500}
      />

      <InputArea
        title="모임 일시"
        onClick={() =>
          openMeetDateBottomSheet(() => (
            <MeetingDateBottomSheet
              dateValue={watch('date')}
              timeValue={watch('time')}
              setValue={setValue}
              openNextBottomSheet={closeMeetDateBottomSheet}
              closeCurrentBottomSheet={closeMeetDateBottomSheet}
            />
          ))
        }
        value={isMeetingDateDirty ? displayDate(watch('date'), watch('time')) : ''}
        placeholder="모임 시간을 설정해주세요."
      />

      <InputArea
        title="모임 장소"
        onClick={() =>
          openLocationBottomSheet(() => (
            <LocationBottomSheet
              openNextBottomSheet={closeLocationBottomSheet}
              closeCurrentBottomSheet={closeLocationBottomSheet}
            />
          ))
        }
        value={''} // TODO : 지도 api 연동 후 추가
        placeholder="모임 장소를 설정해주세요."
      />

      <InputArea
        title="모임 인원"
        onClick={() =>
          openMaxUserBottomSheet(() => (
            <MaxUserBottomSheet
              maxUserValue={watch('maxUser')}
              setValue={setValue}
              closeCurrentBottomSheet={closeMaxUserBottomSheet}
            />
          ))
        }
        value={getFieldState('maxUser').isDirty ? `최대 ${watch('maxUser')}명` : ''}
        placeholder="모임 인원을 설정해주세요."
      />

      <Spacing size={100} />
      <SubmitSection />
    </form>
  );
}

interface MeetingDateBottomSheetProps {
  dateValue: Date;
  timeValue: TimeType;
  setValue: UseFormSetValue<CreateGroupContextValue>;
  openNextBottomSheet: () => void;
  closeCurrentBottomSheet: () => void;
}

function MeetingDateBottomSheet({
  dateValue,
  timeValue,
  setValue,
  openNextBottomSheet,
  closeCurrentBottomSheet,
}: MeetingDateBottomSheetProps) {
  return (
    <BottomSheet
      snap={650}
      onClose={closeCurrentBottomSheet}
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
          <DivisionSpacing size={20} />
          <TimeSwipePicker
            timeValue={timeValue}
            setTimeValue={(time: TimeType) => setValue('time', time, { shouldDirty: true })}
          />
        </div>
      </div>
      <BottomFixedButton text="다음" onClick={openNextBottomSheet} />
    </BottomSheet>
  );
}

interface LocationBottomSheetProps {
  openNextBottomSheet: () => void;
  closeCurrentBottomSheet: () => void;
}

function LocationBottomSheet({
  closeCurrentBottomSheet,
  openNextBottomSheet,
}: LocationBottomSheetProps) {
  return (
    <BottomSheet
      snap={500}
      onClose={closeCurrentBottomSheet}
      isRightButton
      title="모임 장소"
      isTapOutsideToClose
    >
      <div className="relative h-full">
        <div></div>
      </div>
      <BottomFixedButton text="다음" onClick={openNextBottomSheet} />
    </BottomSheet>
  );
}

interface MaxUserBottomSheetProps {
  maxUserValue: number;
  setValue: UseFormSetValue<CreateGroupContextValue>;
  closeCurrentBottomSheet: () => void;
}

function MaxUserBottomSheet({
  maxUserValue,
  setValue,
  closeCurrentBottomSheet,
}: MaxUserBottomSheetProps) {
  return (
    <BottomSheet
      snap={500}
      onClose={closeCurrentBottomSheet}
      isRightButton
      title="모임 인원"
      isTapOutsideToClose
      disableDrag
    >
      <div className="relative h-full">
        <NumberSwipePicker
          setNumberValue={(value: number) => setValue('maxUser', value, { shouldDirty: true })}
          numberValue={maxUserValue}
        />
      </div>
      <BottomFixedButton
        text="완료"
        onClick={() => {
          if (!maxUserValue) setValue('maxUser', 1);
          closeCurrentBottomSheet();
        }}
      />
    </BottomSheet>
  );
}
