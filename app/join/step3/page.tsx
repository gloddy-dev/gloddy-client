'use client';

import CircleCheckbox from '@/components/common/Checkbox/CircleCheckbox';
import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';
import { AuthTitleTextMessage } from '@/components/TextMessage/AuthTextMessage';

import InputForm from './InputForm';

export default function Step3Page() {
  return (
    <div className="relative h-full">
      <TopNavigationBar text="회원가입" isLeft={true} />

      <AuthTitleTextMessage text={`재학생 인증을 위해\n학교 이메일을 입력해주세요`} />

      <InputForm />

      <section>
        <CircleCheckbox
          text={
            <span className="text-14">
              재학생 인증을 진행하면 <span className="text-14 font-700 text-blue">인증마크</span>를
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
    </div>
  );
}
