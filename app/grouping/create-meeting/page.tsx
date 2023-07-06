'use client';

import { useRef, useState } from 'react';

import { ImageType } from '@/@types/global';
import Button from '@/components/common/Button';
import Calendar from '@/components/common/Calendar';
import ImageFrame from '@/components/common/ImageFrame/ImageFrame';
import Input from '@/components/common/Input/Input';
import TextArea from '@/components/common/Input/TextArea';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';
import PersonnelPicker from '@/components/common/SwipePicker/PersonnelPicker';
import TimeSwipePicker from '@/components/common/SwipePicker/TimeSwipePicker';
import { useModal } from '@/hooks/useModal';

interface ModalTabPageProps {
  title: string;
  snap: number;
}

const ModalTabPage: ModalTabPageProps[] = [
  {
    title: '모임 일시',
    snap: 900,
  },
  {
    title: '모임 위치',
    snap: 500,
  },
  {
    title: '모임 인원',
    snap: 500,
  },
];

interface SelectValue {
  meetingImage: ImageType;
  meetingDate: {
    date: Date;
    time: string;
  };
  meetingLocation: string;
  meetingNumber: number;
}

export default function CreateMeeting() {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [selectValue, setSelectValue] = useState<SelectValue>({
    meetingImage: {
      imageFile: null,
      imageBlob: '',
    },
    meetingDate: {
      date: new Date(),
      time: '',
    },
    meetingLocation: '',
    meetingNumber: 0,
  });

  const { isModalOpen, openModal, closeModal } = useModal<
    'meetingDate' | 'meetingLocation' | 'meetingNumber'
  >();

  const setProfileImage = (value: ImageType) => {
    setSelectValue({
      ...selectValue,
      meetingImage: value,
    });
  };

  const setSelectDate = (date: Date) => {
    setSelectValue({
      ...selectValue,
      meetingDate: { date, time: selectValue.meetingDate.time },
    });
  };

  const setSelectNumber = (value: number) => {
    setSelectValue({
      ...selectValue,
      meetingNumber: value,
    });
  };

  const handleNextButton = () => {
    if (currentTab < 2) setCurrentTab((currentTab: number) => currentTab + 1);
    else {
      // TODO: 모임 생성 API 호출
    }
  };

  return (
    <div>
      <ImageFrame
        setImage={setProfileImage}
        imgRef={imgRef}
        imageBlob={selectValue.meetingImage.imageBlob}
        shape="square"
      />

      <section>
        <div className="mb-5 text-14">방제목</div>
        <Input placeholder="제목을 입력해주세요" />
      </section>

      <div className="h-15" />

      <section>
        <div className="flex justify-between">
          <div className="font-500 mb-5 text-14">활동 소개글</div>
          <div className="font-500 text-12 text-gray2">0/30</div>
        </div>
        <TextArea placeholder="내용을 입력해주세요." />
      </section>

      <div className="h-15" />

      <section
        className="mb-15 flex flex-col"
        onClick={() => {
          setCurrentTab(0);
          openModal('meetingNumber');
        }}
      >
        <div className=" mb-5 text-14">모임 일시</div>
        <div className=" h-50  rounded-lg bg-gray5 py-13 pl-23 text-16 text-black outline-none">
          <span className=" text-16 text-gray3">모임 일시를 설정해주세요</span>
        </div>
      </section>

      <div className="h-15" />

      <section
        className="mb-15 flex flex-col"
        onClick={() => {
          setCurrentTab(1);
          openModal('meetingNumber');
        }}
      >
        <div className=" mb-5 text-14">모임 위치</div>
        <div className=" h-50  rounded-lg bg-gray5 py-13 pl-23 text-16 text-black outline-none">
          <span className=" text-16 text-gray3">모임 위치를 설정해주세요</span>
        </div>
      </section>

      <div className="h-15" />

      <section
        className="mb-15 flex flex-col"
        onClick={() => {
          setCurrentTab(2);
          openModal('meetingNumber');
        }}
      >
        <div className=" mb-5 text-14">모임 인원</div>
        <div className=" h-50  rounded-lg bg-gray5 py-13 pl-23 text-16 text-black outline-none">
          <span className=" text-16 text-gray3">모임 인원를 설정해주세요</span>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-20 z-10 m-auto max-w-[23.75rem]  bg-white ">
        <Button text="완료" disabled />
      </div>

      <BottomUpModal
        isModalOpen={isModalOpen}
        snap={ModalTabPage[currentTab].snap}
        disableDrag={true}
        isLeftButton={currentTab !== 0}
        handleLeftButtonClick={() => setCurrentTab((prev) => (prev !== 0 ? prev - 1 : 0))}
        onClose={closeModal}
        isRightButton
        text={<div className=" text-18">{ModalTabPage[currentTab].title}</div>}
      >
        <div className="relative h-full">
          {currentTab === 0 && (
            <div>
              <Calendar
                selectedDate={selectValue.meetingDate.date}
                setSelectedDate={setSelectDate}
              />
              <div className="my-10 h-15 bg-white2" />
              <TimeSwipePicker />
            </div>
          )}
          {currentTab === 1 && <>안</>}
          {currentTab === 2 && (
            <PersonnelPicker initialValue={selectValue.meetingNumber} setValue={setSelectNumber} />
          )}
          <div className="fixed inset-x-0 bottom-20 mx-auto max-w-[23.75rem]">
            <Button text={currentTab < 2 ? '다음' : '완료'} onClick={handleNextButton} />
          </div>
        </div>
      </BottomUpModal>
    </div>
  );
}
