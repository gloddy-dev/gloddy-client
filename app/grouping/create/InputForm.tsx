'use client';

import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import Calendar from '@/components/common/Calendar';
import ImageFrame from '@/components/common/ImageFrame/ImageFrame';
import { Input, TextArea } from '@/components/common/Input';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';
import Spacing from '@/components/common/Spacing';
import NumberSwipePicker from '@/components/common/SwipePicker/NumberSwipePicker';
import TimeSwipePicker from '@/components/common/SwipePicker/TimeSwipePicker';
import { useModal } from '@/hooks/useModal';

import InputSection from './InputSection';

import type { ImageType, TimeType } from '@/types';

const TEXT_AREA_COUNT: number = 30;

type ModalTabType = {
  name: string;
  title: string;
  snap: number;
  message: string;
};

const ModalTabList: ModalTabType[] = [
  {
    name: 'meetingDate',
    title: '모임 일시',
    snap: 900,
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
  image: ImageType;
  date: Date;
  time: TimeType;
  meetingLocation: string;
  meetingNumber: number;
};

const inputDefaultValues = {
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
  meetingLocation: '',
  meetingNumber: 0,
};

export default function InputForm() {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [currentTab, setCurrentTab] = useState<number>(0);

  const { register, watch, handleSubmit, setValue } = useForm<InputType>({
    defaultValues: inputDefaultValues,
  });

  const { isModalOpen, openModal, closeModal, modalName } = useModal<
    'meetingDate' | 'meetingLocation' | 'meetingNumber'
  >();

  const handleNextButton = () => {
    if (modalName === 'meetingDate') openModal('meetingLocation');
    if (modalName === 'meetingLocation') openModal('meetingNumber');
    if (modalName === 'meetingNumber') {
      closeModal();
      // TODO: 모임 생성 API
    }
  };

  const handlePreviousButton = () => {
    if (modalName === 'meetingDate') return;
    if (modalName === 'meetingLocation') openModal('meetingDate');
    if (modalName === 'meetingNumber') openModal('meetingLocation');
  };

  console.log(ModalTabList.find((modalTab) => modalTab.name === modalName)?.snap);

  return (
    <div>
      <ImageFrame
        setImage={(value: ImageType) => setValue('image', value)}
        imgRef={imgRef}
        imageBlob={watch('image').imageBlob}
        shape="square"
      />

      <section>
        <div className="mb-5 text-14">방제목</div>
        <Input placeholder="제목을 입력해주세요" />
      </section>

      <Spacing size={15} />

      <section>
        <div className="flex justify-between">
          <div className="font-500 mb-5 text-14">활동 소개글</div>
          <div className="font-500 text-12 text-gray2">0/${TEXT_AREA_COUNT}</div>
        </div>
        <TextArea placeholder="내용을 입력해주세요." />
      </section>

      <Spacing size={15} />

      {/* [] */}

      <InputSection
        title="모임 일시"
        message="모임 일시를 설정해주세요"
        onClick={() => openModal('meetingDate')}
      />

      <Spacing size={15} />

      <InputSection
        title="모임 위치"
        message="모임 위치를 설정해주세요"
        onClick={() => openModal('meetingLocation')}
      />

      <Spacing size={15} />

      <InputSection
        title="모임 인원"
        message="모임 인원를 설정해주세요"
        onClick={() => openModal('meetingNumber')}
      />

      <Button
        text="완료"
        disabled
        className="fixed inset-x-0 bottom-20 z-10 m-auto max-w-[23.75rem] bg-white"
      />

      <BottomUpModal
        isModalOpen={isModalOpen}
        snap={ModalTabList.find((modalTab) => modalTab.name === modalName)?.snap || 0}
        disableDrag={true}
        isLeftButton={modalName !== 'meetingDate'}
        handleLeftButtonClick={handlePreviousButton}
        onClose={closeModal}
        isRightButton
        text={
          <div className="text-18">
            {ModalTabList.find((modalTab) => modalTab.name === modalName)?.title || ''}
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
              <div className="my-10 h-15 bg-white2" />
              <TimeSwipePicker
                timeValue={watch('time')}
                setTimeValue={(time: TimeType) => setValue('time', time)}
              />
            </div>
          )}
          {modalName === 'meetingLocation' && <div>{/* TODO : 모임 위치 */}</div>}
          {modalName === 'meetingNumber' && (
            <NumberSwipePicker
              numberValue={watch('meetingNumber')}
              setNumberValue={(value: number) => setValue('meetingNumber', value)}
            />
          )}
          <Button
            text={modalName === 'meetingNumber' ? '완료' : '다음'}
            onClick={handleNextButton}
            className="fixed inset-x-0 bottom-20 mx-auto max-w-380 "
          />
        </div>
      </BottomUpModal>
    </div>
  );
}
