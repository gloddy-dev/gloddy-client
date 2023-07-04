'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';

import Button from '@/components/common/Button';
import CircleImageFrame from '@/components/common/ImageFrame/CircleImageFrame';
import AuthInput from '@/components/common/Input/AuthInput';
import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';

export default function Step5Page() {
  const [profileImage, setProfileImage] = useState('');
  const imgRef = useRef();

  return (
    <div className="relative h-full ">
      <TopNavigationBar text="회원가입" />

      <CircleImageFrame
        setProfileImage={setProfileImage}
        imgRef={imgRef}
        profileImage={profileImage}
      />

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
