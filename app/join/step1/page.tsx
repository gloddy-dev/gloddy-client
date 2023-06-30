'use client';

import Button from '@/components/common/Button';
import AuthInput from '@/components/common/Input/AuthInput';
import { TitleTextMessage } from '@/components/join/TextMessage';

export default function Step1Page() {
  const handleSNSButon = () => {};
  return (
    <div>
      <TitleTextMessage text={`휴대폰 번호를\n인증해주세요`} />
      <div className="h-30" />
      <AuthInput placeholder="휴대폰 번호" />
      <div className="h-18" />
      <Button text="인증문자 전송" onClick={handleSNSButon} disabled />
      <div className="h-18" />
    </div>
  );
}
