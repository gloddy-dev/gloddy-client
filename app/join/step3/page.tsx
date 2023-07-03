'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import CircleCheckbox from '@/components/common/Checkbox/CircleCheckbox';
import AuthInput from '@/components/common/Input/AuthInput';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';
import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';
import { TitleTextMessage } from '@/components/join/TextMessage';
import regexr from '@/constants/regexr';

type Inputs = {
  email: string;
  certificateNumber: number;
};
export default function Step3Page() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<Inputs>();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSubmitEmail: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data.email);
    // 인증번호 전송
    setIsModalOpen(true);
  };
  const handleSubmitCertificateNumber: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data.certificateNumber);
    // 인증번호 확인
    setIsModalOpen(false);
  };

  return (
    <div className="relative h-full">
      <BottomUpModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        snap={400}
        isCloseButton
      >
        <section>
          <p className="text-20 font-700">회원님의 이메일로 </p>
          <p className="text-20 font-700">인증번호를 전송하였습니다.</p>
        </section>

        <form onSubmit={handleSubmit(handleSubmitCertificateNumber)}>
          <section className="my-20">
            <AuthInput
              text="인증번호"
              register={register('certificateNumber', {
                required: true,
              })}
              maxLength={6}
              type="number"
            />
            <div className="p-10 flex justify-between">
              <p className="underline text-14 text-gray3 ">재전송하기</p>
              <p className="text-orange">02:59</p>
            </div>
          </section>

          <section>
            <Button text="완료" disabled={watch('certificateNumber')?.length < 6} />
          </section>
        </form>
      </BottomUpModal>
      <TopNavigationBar text="회원가입" />

      <section>
        <TitleTextMessage text={`재학생 인증을 위해\n학교 이메일을 입력해주세요`} />
      </section>

      <form onSubmit={handleSubmit(handleSubmitEmail)}>
        <section>
          <AuthInput
            text="ID"
            register={register('email', {
              required: true,
              pattern: {
                value: regexr.email,
                message: '학교 이메일을 다시 확인해주세요.',
              },
            })}
          />
        </section>

        <p
          className={clsx('flex justify-center text-orange text-13 font-500 gap-5 float', {
            invisible: !errors.email,
          })}
        >
          <Image alt="alert" src="/assets/alert.svg" width={10} height={30} />
          {errors.email?.message}
        </p>

        <div className="h-10" />

        <section>
          <CircleCheckbox
            text={
              <span className="text-14">
                재학생 인증을 진행하면 <span className="font-700 text-14 text-blue">인증마크</span>
                를 받을 수 있어요
              </span>
            }
            checked
          />
          <div className="h-10" />
          <CircleCheckbox
            text={
              <span className="text-14">신뢰있는 모임을 위해 재학생 인증을 꼭 진행해주세요</span>
            }
            checked
          />
          <div className="h-10" />
          <CircleCheckbox
            text={
              <span className="text-14">
                재학생 이메일 발급 <br />
                https://www.instagram.com/gloddykorea/
              </span>
            }
            checked
          />
        </section>

        <section className="absolute bottom-0 w-full">
          <Button text="인증하기" disabled={watch('email')?.length === 0} type="submit" />

          <div className="h-8" />

          <Button text="다음에 인증하기" color="orange" href="/join/step4" />
        </section>
      </form>
    </div>
  );
}
