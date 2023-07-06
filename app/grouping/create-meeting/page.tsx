'use client';

import { Badge } from 'antd-mobile';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import Button from '@/components/common/Button';
import Calendar from '@/components/common/Calendar';
import Input from '@/components/common/Input/Input';
import TextArea from '@/components/common/Input/TextArea';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';
import PersonnelPicker from '@/components/common/SwipePicker/PersonnelPicker';
import TimeSwipePicker from '@/components/common/SwipePicker/TimeSwipePicker';
import { useModal } from '@/hooks/useModal';
import saveImage from '@/utils/saveImage';

interface ModalTabPageProps {
  title: string;
  snap: number;
  pageContent: React.ReactNode;
}

interface FormValue {
  date: string;
  time: string;
  location: string;
  personnel: number;
}

export default function CreateMeeting() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [meetingImage, setMeetingImage] = useState<string>('');
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [formValue, setFormValue] = useState<FormValue>({
    date: '2022.04.27',
    time: '7PM-9PM',
    location: '서울특별시 동대문구 경희대로 26',
    personnel: 7,
  });
  const imgRef = useRef<HTMLInputElement | null>(null);

  const { isModalOpen, openModal, closeModal } =
    useModal<'meetingDate,meetingLocation,meetingNumber'>();

  const setPersonnelValue = (value: number) => {
    setFormValue({
      ...formValue,
      personnel: value,
    });
  };

  const ModalTabPage: ModalTabPageProps[] = [
    {
      title: '모임 일시',
      snap: 0.9,
      pageContent: (
        <div className="flex flex-col items-center justify-center">
          <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

          <div className="h-15 w-full bg-white2"></div>
          <div className="mt-20 h-125 w-full">
            <TimeSwipePicker />
          </div>
          <div className="fixed bottom-2 w-full p-20">
            <Button text="다음" onClick={() => setCurrentTab(1)} />
          </div>
        </div>
      ),
    },
    {
      title: '모임 위치',
      snap: 0.5,
      pageContent: (
        <div className="flex flex-col items-center justify-center">
          <div>모임 위치</div>
          <div className="fixed bottom-2 w-full p-20">
            <Button text="다음" onClick={() => setCurrentTab(2)} />
          </div>
        </div>
      ),
    },
    {
      title: '모임 인원',
      snap: 0.5,
      pageContent: (
        <div className="flex flex-col items-center justify-center">
          <div className="h-300 w-full">
            <PersonnelPicker
              selectList={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              initialValue={formValue.personnel}
              setValue={setPersonnelValue}
            />
          </div>
          <div className="m-x-auto  fixed inset-x-0 bottom-2 max-w-[23.75rem] p-20">
            <Button text="완료" onClick={closeModal} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center pb-100">
      <div className="flex w-full flex-col items-center justify-center px-20">
        <Badge
          color="white"
          content={
            <div>
              <label htmlFor="input-file">
                <Image src="/assets/image_plus.svg" alt="plus" width={25} height={25} />
              </label>
              <input
                type="file"
                accept="image/*"
                id="input-file"
                className="hidden"
                ref={imgRef}
                onChange={() => saveImage(setMeetingImage, imgRef)}
              />
            </div>
          }
        >
          <div className="h-92 w-92 rounded-8 bg-gray6">
            {meetingImage && <Image src={meetingImage} alt="file_image" width={92} height={92} />}
          </div>
        </Badge>
        <div className="mb-15 flex w-full flex-col">
          <div className="font-500 mb-5 text-14">방제목</div>
          <Input placeholder="제목을 입력해주세요" />
        </div>
        <div className="flex w-full flex-col">
          <div className="flex w-full justify-between">
            <div className="font-500 mb-5 text-14">활동 소개글</div>
            <div className="font-500 text-12 text-gray2">0/30</div>
          </div>
          <TextArea placeholder="내용을 입력해주세요." />
        </div>
      </div>
      <div className="my-18 h-14 w-full bg-white2"></div>
      <div className="w-full px-20">
        <div
          className="mb-15 flex w-full cursor-pointer flex-col"
          onClick={() => {
            setCurrentTab(0);
            openModal('meetingNumber');
          }}
        >
          <div className="font-500 mb-5 text-14">모임 일시</div>
          <div className="font-500 h-50 w-full rounded-lg bg-gray5 py-13 pl-23 text-16 text-black outline-none">
            <span className="font-500 text-16 text-gray3">모임 일시를 설정해주세요</span>
          </div>
        </div>
        <div
          className="mb-15 flex w-full cursor-pointer flex-col"
          onClick={() => {
            setCurrentTab(1);
            openModal('meetingNumber');
          }}
        >
          <div className="font-500 mb-5 text-14">모임 위치</div>
          <div className="font-500 h-50 w-full rounded-lg bg-gray5 py-13 pl-23 text-16 text-black outline-none">
            <span className="font-500 text-16 text-gray3">모임 위치를 설정해주세요</span>
          </div>
        </div>
        <div
          className="mb-15 flex w-full cursor-pointer flex-col"
          onClick={() => {
            setCurrentTab(2);
            openModal('meetingNumber');
          }}
        >
          <div className="font-500 mb-5 text-14">모임 인원</div>
          <div className="font-500 h-50 w-full rounded-lg bg-gray5 py-13 pl-23 text-16 text-black outline-none">
            <span className="font-500 text-16 text-gray3">모임 인원를 설정해주세요</span>
          </div>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-20 z-10 m-auto w-full max-w-[23.75rem]  bg-white">
        <Button text="완료" />
      </div>
      <BottomUpModal
        isModalOpen={isModalOpen}
        snap={ModalTabPage[currentTab].snap}
        disableDrag={true}
        isLeftButton={currentTab !== 0}
        handleLeftButtonClick={() => setCurrentTab((prev) => (prev !== 0 ? prev - 1 : 0))}
        onClose={closeModal}
        isRightButton
        text={<div className="font-500 text-18">{ModalTabPage[currentTab].title}</div>}
      >
        {ModalTabPage[currentTab].pageContent}
      </BottomUpModal>
    </div>
  );
}
