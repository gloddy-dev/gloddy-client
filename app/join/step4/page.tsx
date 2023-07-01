'use client';
import Button from '@/components/common/Button';
import AuthInput from '@/components/common/Input/AuthInput';
import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function Step5Page() {
  const [profileImage, setProfileImage] = useState('');
  const imgRef = useRef();

  const saveImage = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
  };

  console.log(profileImage);

  return (
    <div className="relative h-full ">
      <TopNavigationBar text="회원가입" />

      <section className="flex justify-center items-center relative h-160">
        <label className="relative" for="profileImage">
          <div className="w-100 h-100 bg-gray5 rounded-full"></div>
          <Image
            alt="plus"
            src="/assets/plus.svg"
            width={20}
            height={30}
            className="absolute right-5 bottom-5"
          />
        </label>

        <input
          className="hidden"
          type="file"
          accept="image/*"
          id="profileImage"
          onChange={saveImage}
          ref={imgRef}
        />
      </section>

      <section className="gap-10 flex flex-col">
        <article className="gap-5 flex flex-col">
          <p className="text-14">닉네임</p>
          <AuthInput placeholder="닉네임을 입력해주세요." />
        </article>

        <article className="gap-5 flex flex-col">
          <p className="text-14">생년월일</p>
          <AuthInput placeholder="생년월일을 선택해주세요." />
        </article>

        <article className="gap-5 flex flex-col">
          <p className="text-14">성별</p>
          <AuthInput placeholder="성별을 선택해주세요." />
        </article>
      </section>

      <section className="absolute bottom-0 w-full">
        <Button text="다음" disabled />
      </section>
    </div>
  );
}
