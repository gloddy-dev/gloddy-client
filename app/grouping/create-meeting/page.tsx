'use client';

import Button from '@/components/common/Button';
import Calendar from '@/components/common/Calendar';
import Input from '@/components/common/Input/Input';
import TextArea from '@/components/common/Input/TextArea';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';
import TimeSwipePicker from '@/components/common/SwipePicker/TimeSwipePicker';
import { Badge } from 'antd-mobile';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const CreateMeeting = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [meetingImage, setMeetingImage] = useState('');
  const imgRef = useRef<HTMLInputElement | null>(null);

  const saveImgFile = () => {
    const file = imgRef.current!.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setMeetingImage(reader.result as string);
    };
  };
  return (
    <div className="flex items-center justify-center w-full flex-col pb-100">
      <div className="flex items-center justify-center w-full flex-col px-20">
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
                onChange={saveImgFile}
              />
            </div>
          }
        >
          <div className="h-92 w-92 rounded-8 bg-gray6">
            {meetingImage && <Image src={meetingImage} alt="file_image" width={92} height={92} />}
          </div>
        </Badge>
        <div className="flex w-full flex-col mb-15">
          <div className="text-14 font-500 mb-5">방제목</div>
          <Input placeholder="제목을 입력해주세요" />
        </div>
        <div className="flex w-full flex-col">
          <div className="flex w-full justify-between">
            <div className="text-14 font-500 mb-5">활동 소개글</div>
            <div className="text-12 font-500 text-gray2">0/30</div>
          </div>
          <TextArea placeholder="내용을 입력해주세요." />
        </div>
      </div>
      <div className="h-14 bg-white2 w-full my-18"></div>
      <div className="w-full px-20">
        <div
          className="flex w-full flex-col mb-15 cursor-pointer"
          onClick={() => setIsOpened((prev) => !prev)}
        >
          <div className="text-14 font-500 mb-5">모임 일시</div>
          <div className="bg-gray5 text-black outline-none text-16 font-500 pl-23 py-13 w-full rounded-lg h-50">
            <span className="text-16 font-500 text-gray3">모임 일시를 설정해주세요</span>
          </div>
        </div>
        <div
          className="flex w-full flex-col mb-15 cursor-pointer"
          onClick={() => setIsOpened((prev) => !prev)}
        >
          <div className="text-14 font-500 mb-5">모임 위치</div>
          <div className="bg-gray5 text-black outline-none text-16 font-500 pl-23 py-13 w-full rounded-lg h-50">
            <span className="text-16 font-500 text-gray3">모임 위치를 설정해주세요</span>
          </div>
        </div>
        <div
          className="flex w-full flex-col mb-15 cursor-pointer"
          onClick={() => setIsOpened((prev) => !prev)}
        >
          <div className="text-14 font-500 mb-5">모임 인원</div>
          <div className="bg-gray5 text-black outline-none text-16 font-500 pl-23 py-13 w-full rounded-lg h-50">
            <span className="text-16 font-500 text-gray3">모임 인원를 설정해주세요</span>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 z-10 w-full px-20 py-20 bg-white">
        <Button text="완료" />
      </div>
      <BottomUpModal
        isModalOpen={isOpened}
        snap={0.9}
        setIsModalOpen={setIsOpened}
        isLeftButton
        isRightButton
        text={<div className="text-18 font-500">모임 일시</div>}
      >
        <div className="flex flex-col justify-center items-center">
          <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

          <div className="h-15 bg-white2 w-full"></div>
          <div className="w-full h-125 mt-20">
            <TimeSwipePicker />
          </div>
          <div className="fixed bottom-2 w-full p-20">
            <Button text="다음" />
          </div>
        </div>
      </BottomUpModal>
    </div>
  );
};

export default CreateMeeting;
