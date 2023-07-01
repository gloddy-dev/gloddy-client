'use client';
import Button from '@/components/common/Button';
import CircleCheckbox from '@/components/common/Checkbox/CircleCheckbox';
import AuthInput from '@/components/common/Input/AuthInput';
import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';
import { TitleTextMessage } from '@/components/join/TextMessage';

export default function Step3Page() {
  return (
    <div className="relative h-full">
      <TopNavigationBar text="회원가입" />

      <section>
        <TitleTextMessage text={`재학생 인증을 위해\n학교 이메일을 입력해주세요`} />
      </section>

      <section>
        <AuthInput text="ID" />
      </section>

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
        <Button text="인증하기" disabled />

        <div className="h-8" />

        <Button text="다음에 인증하기" color="orange" href="/join/step4" />
      </section>
    </div>
  );
}
