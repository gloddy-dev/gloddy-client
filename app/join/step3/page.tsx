'use client';

import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';
import { AuthTitleTextMessage } from '@/components/TextMessage/AuthTextMessage';

import InputForm from '../step1/InputForm';

export default function Step3Page() {
  return (
    <div className="relative h-full">
      <TopNavigationBar text="회원가입" isLeft={true} />

      <section>
        <AuthTitleTextMessage text={`재학생 인증을 위해\n학교 이메일을 입력해주세요`} />
      </section>

      <InputForm />
    </div>
  );
}
