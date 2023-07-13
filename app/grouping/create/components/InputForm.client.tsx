'use client';

import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/common/Button';
import ImageFrame from '@/components/common/ImageFrame';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { useModal } from '@/hooks/useModal';

import DateBottomUpModal from './inputSection/DateBottomUpModal';
import DescriptionSection from './inputSection/DescriptionSection';
import LocationBottomUpModal from './inputSection/LocationBottomUpModal';
import NumberBottomUpModal from './inputSection/NumberBottomUpModal';
import TitleSection from './inputSection/TitleSection';

import type { ImageType, TimeType } from '@/types';
import type { InputType, ModalNameType } from '../type';

const inputDefaultValues = {
  title: '',
  description: '',
  image: {
    imageFile: null,
    imageBlob: '',
  },
  date: new Date(),
  time: {
    fromHour: '1',
    fromMin: '00',
    fromAmPm: 'AM',
    toHour: '1',
    toMin: '00',
    toAmPm: 'AM',
  },
  meetingLocation: '경희대학교',
};

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
  const imgRef = useRef<HTMLInputElement | null>(null);
  const { register, watch, handleSubmit, setValue } = useForm<InputType>({
    defaultValues: inputDefaultValues,
  });

  const { openModal, closeModal, modalName } = useModal<ModalNameType>();

  const handleSubmitButton = (data: InputType) => {
    // TODO : 서버 api 전송
    console.log(data);
  };

  const isAllEntered =
    !!watch('title') &&
    !!watch('description') &&
    !!watch('date') &&
    !!watch('time').fromHour &&
    !!watch('time').fromMin &&
    !!watch('time').fromAmPm &&
    !!watch('time').toHour &&
    !!watch('time').toMin &&
    !!watch('time').toAmPm &&
    !!watch('meetingLocation') &&
    !!watch('meetingNumber');

  return (
    <div>
      <ImageFrame
        setImage={(value: ImageType) => setValue('image', value)}
        imgRef={imgRef}
        imageBlob={watch('image')?.imageBlob}
        shape="square"
      />

      <TitleSection
        register={register('title', {
          required: true,
          maxLength: 20,
        })}
      />

      <Spacing size={15} />

      <DescriptionSection
        register={register('description', {
          required: true,
          maxLength: 20,
        })}
      />

      <Spacing size={15} />

      <section onClick={() => openModal('meetingDate')}>
        <p className="text-14">모임 일시</p>
        <Spacing size={10} />
        <Input
          readOnly
          value={displayDate(watch('date'), watch('time'))}
          placeholder="모임 시간을 설정해주세요."
        />
        <Spacing size={15} />
      </section>

      <section onClick={() => openModal('meetingLocation')}>
        <p className="text-14">모임 장소</p>
        <Spacing size={10} />
        <Input readOnly value={watch('meetingLocation')} placeholder="모임 장소를 설정해주세요." />
        <Spacing size={15} />
      </section>

      <section onClick={() => openModal('meetingNumber')}>
        <p className="text-14">모임 장소</p>
        <Spacing size={10} />
        <Input readOnly value={watch('meetingNumber')} placeholder="모임 인원을 설정해주세요." />
        <Spacing size={15} />
      </section>

      <Button
        text="완료"
        disabled={!isAllEntered}
        className="fixed inset-x-0 bottom-20 z-10 m-auto max-w-380"
        onClick={handleSubmit(handleSubmitButton)}
      />

      <DateBottomUpModal
        isModalOpen={modalName === 'meetingDate'}
        closeModal={closeModal}
        onPreviousClick={() => openModal('meetingDate')}
        onNextClick={() => openModal('meetingLocation')}
        setValue={setValue}
        date={watch('date')}
        time={watch('time')}
      />
      <LocationBottomUpModal
        isModalOpen={modalName === 'meetingLocation'}
        closeModal={closeModal}
        onPreviousClick={() => openModal('meetingLocation')}
        onNextClick={() => openModal('meetingNumber')}
        setValue={setValue}
        location={watch('meetingLocation')}
      />
      <NumberBottomUpModal
        isModalOpen={modalName === 'meetingNumber'}
        closeModal={closeModal}
        onPreviousClick={() => openModal('meetingNumber')}
        onNextClick={closeModal}
        setValue={setValue}
        number={watch('meetingNumber')}
      />
    </div>
  );
}
