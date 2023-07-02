'use client';
import { useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import CircleCheckbox from '@/components/common/Checkbox/CircleCheckbox';
import AuthInput from '@/components/common/Input/AuthInput';
import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';
import { TitleTextMessage } from '@/components/join/TextMessage';

type Inputs = {
  email: string;
};
export default function Step3Page() {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  const handleSubmitEmail = (e: React.SyntheticEvent<Element, Event>) => {
    e.stopPropagation();
    console.log(watch('email'));
  };

  return (
    <div className="relative h-full">
      <TopNavigationBar text="회원가입" />

      <section>
        <TitleTextMessage text={`재학생 인증을 위해\n학교 이메일을 입력해주세요`} />
      </section>

      <form>
        <AuthInput
          text="ID"
          register={register('email', {
            required: true,
            pattern: {
              value: /^010 - \d{4} - \d{4}$/,
              message: '올바른 휴대폰 번호를 입력해주세요.',
            },
          })}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSubmitEmail(e);
            }
          }}
        />
      </form>

      <div className="h-30" />

      <section>
        <CircleCheckbox
          text={
            <span className="text-14">
              재학생 인증을 진행하면 <span className="font-700 text-14 text-blue">인증마크</span>를
              받을 수 있어요
            </span>
          }
          checked
        />
        <div className="h-10" />
        <CircleCheckbox
          text={<span className="text-14">신뢰있는 모임을 위해 재학생 인증을 꼭 진행해주세요</span>}
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
        <Button
          text="인증하기"
          onClick={handleSubmitEmail}
          disabled={watch('email')?.length === 0}
        />

        <div className="h-8" />

        <Button text="다음에 인증하기" color="orange" href="/join/step4" />
      </section>
    </div>
  );
}
