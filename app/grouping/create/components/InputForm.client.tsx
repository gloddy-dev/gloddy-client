'use client';

import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import Calendar from '@/components/common/Calendar';
import DivisionSpacing from '@/components/common/DivisionSpacing';
import ImageFrame from '@/components/common/ImageFrame/ImageFrame';
import { Input, TextArea } from '@/components/common/Input';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';
import Spacing from '@/components/common/Spacing';
import NumberSwipePicker from '@/components/common/SwipePicker/NumberSwipePicker';
import TimeSwipePicker from '@/components/common/SwipePicker/TimeSwipePicker';
import { useModal } from '@/hooks/useModal';

import InputSection from './InputSection.server';

import type { ImageType, TimeType } from '@/types';

const TEXT_AREA_COUNT = 30;

type ModalNameType = 'meetingDate' | 'meetingLocation' | 'meetingNumber';
type ModalTabType = {
  name: ModalNameType;
  title: string;
  snap: number;
  message: string;
};
const modalTabList: ModalTabType[] = [
  {
    name: 'meetingDate',
    title: '모임 일시',
    snap: 650,
    message: '모임 일시를 설정해주세요',
  },
  {
    name: 'meetingLocation',
    title: '모임 위치',
    snap: 500,
    message: '모임 위치를 설정해주세요',
  },
  {
    name: 'meetingNumber',
    title: '모임 인원',
    snap: 500,
    message: '모임 인원을 설정해주세요',
  },
];

type InputType = {
  title: string;
  description: string;
  image: ImageType;
  date: Date;
  time: TimeType;
  meetingLocation: string;
  meetingNumber: number;
};

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

function displayDate(date, time) {
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

  const { isModalOpen, openModal, closeModal, modalName } = useModal<ModalNameType>();

  const handlePreviousButton = () => {
    switch (modalName) {
      case 'meetingNumber':
        openModal('meetingLocation');
        break;
      case 'meetingLocation':
        openModal('meetingDate');
        break;
      default:
        console.log('No matching modalName found');
    }
  };

  const handleNextButton = () => {
    switch (modalName) {
      case 'meetingDate':
        openModal('meetingLocation');
        break;
      case 'meetingLocation':
        openModal('meetingNumber');
        break;
      case 'meetingNumber':
        if (watch('meetingNumber') === undefined) setValue('meetingNumber', 1);
        closeModal();
        break;
      default:
        closeModal();
    }
  };

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

      <section>
        <div className="mb-5 text-14">방 제목</div>
        <Input
          placeholder="제목을 입력해주세요"
          register={register('title', {
            required: true,
            maxLength: 20,
          })}
        />
      </section>

      <Spacing size={15} />

      <section>
        <div className="flex justify-between">
          <div className="mb-5 text-14">활동 소개글</div>
          <div className="text-12 text-gray2">0/${TEXT_AREA_COUNT}</div>
        </div>
        <TextArea
          placeholder="내용을 입력해주세요."
          register={register('description', {
            required: true,
            maxLength: 20,
          })}
        />
      </section>

      <Spacing size={15} />

      {modalTabList.map((modalTab: ModalTabType) => (
        <InputSection
          key={modalTab.title}
          title={modalTab.title}
          value={
            modalTab.name === 'meetingDate'
              ? displayDate(watch('date'), watch('time'))
              : !!watch(modalTab.name)
              ? watch(modalTab.name)
              : ''
          }
          placeholder={modalTab.message}
          onClick={() => openModal(modalTab.name)}
        />
      ))}

      <Button
        text="완료"
        disabled={!isAllEntered}
        className="fixed inset-x-0 bottom-20 z-10 m-auto max-w-380"
        onClick={handleSubmit(handleSubmitButton)}
      />

      {BottomUpModalDate}
      <BottomUpModal
        isModalOpen={isModalOpen}
        snap={modalTabList.find((modalTab) => modalTab.name === modalName)?.snap || 0}
        isLeftButton={modalName !== 'meetingDate'}
        handleLeftButtonClick={handlePreviousButton}
        onClose={closeModal}
        isRightButton
        text={
          <div className="text-18">
            {modalTabList.find((modalTab) => modalTab.name === modalName)?.title || ''}
          </div>
        }
      >
        <div className="relative h-full">
          {modalName === 'meetingDate' && (
            <div>
              <Calendar
                dateValue={watch('date')}
                setDateValue={(date: Date) => setValue('date', date)}
              />
              <DivisionSpacing />
              <TimeSwipePicker
                timeValue={watch('time')}
                setTimeValue={(time: TimeType) => setValue('time', time)}
              />
            </div>
          )}
          {modalName === 'meetingLocation' && <div>{/* TODO : 모임 위치 */}</div>}
          {modalName === 'meetingNumber' && (
            <NumberSwipePicker
              setNumberValue={(value: number) => setValue('meetingNumber', value)}
              numberValue={watch('meetingNumber')}
            />
          )}
          <Button
            text={modalName === 'meetingNumber' ? '완료' : '다음'}
            onClick={handleNextButton}
            className="fixed inset-x-0 bottom-20 mx-auto max-w-380"
          />
        </div>
      </BottomUpModal>
    </div>
  );
}
