'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';
import { regexr } from '@/constants/regexr';
import { useModal } from '@/hooks/useModal';
import useJoin from '@/store/useJoin';

type InputType = {
  email: string;
  certificateNumber: number;
};

export default function InputForm() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<InputType>();
  const { isModalOpen, openModal, closeModal } = useModal<'modal'>();
  const { setJoinValue } = useJoin();

  const onSubmitEmail: SubmitHandler<InputType> = (data: InputType) => {
    console.log(data.email);
    openModal('modal');
    setJoinValue('email', data.email);
    // 인증번호 전송
  };
  const onSubmitCertificateNumber: SubmitHandler<InputType> = (data: InputType) => {
    console.log(data.certificateNumber);
    // 인증번호 확인
    router.push('/join/step4');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitEmail)}>
        <section>
          <Input
            label="ID"
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
          className={clsx('font-500 float flex justify-center gap-5 text-13 text-orange', {
            invisible: !errors.email,
          })}
        >
          <Image alt="alert" src="/assets/alert.svg" width={10} height={30} />
          {errors.email?.message}
        </p>

        <div className="h-10" />

        <section className="absolute bottom-0 w-full">
          <Button
            text="인증하기"
            type="submit"
            disabled={
              Boolean(errors.email) || watch('email') === undefined || watch('email')?.length === 0
            }
          />

          <div className="h-8" />

          <Button text="다음에 인증하기" color="orange" href="/join/step4" />
        </section>
      </form>

      {isModalOpen && (
        <BottomUpModal isModalOpen={isModalOpen} onClose={closeModal} snap={400} isRightButton>
          <section className="text-20 font-700">
            <p>회원님의 이메일로 </p>
            <p>인증번호를 전송하였습니다.</p>
          </section>

          <form onSubmit={handleSubmit(onSubmitCertificateNumber)}>
            <section className="my-20">
              <Input
                label="인증번호"
                register={register('certificateNumber', {
                  required: true,
                  pattern: {
                    value: regexr.certificateNumber,
                    message: '인증 번호를 다시 확인해주세요.',
                  },
                })}
                maxLength={6}
              />
              <div className="flex justify-between p-10">
                <p className="text-14 text-gray3 underline ">재전송하기</p>
                <p className="text-orange">02:59</p>
              </div>
            </section>

            <section>
              <Button
                text="완료"
                disabled={
                  String(watch('certificateNumber'))?.length < 6 ||
                  watch('certificateNumber') === undefined
                }
                type="submit"
              />
            </section>
          </form>
        </BottomUpModal>
      )}
    </div>
  );
}
