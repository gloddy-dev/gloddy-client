'use client';
import Button from '@/components/common/Button';
import SquareCheckbox from '@/components/common/Checkbox/SquareCheckbox';
import AuthInput from '@/components/common/Input/AuthInput';
import Image from 'next/image';

export default function LoginPage() {
  const handleLogin = () => {};
  const handleLoginOtherAuth = () => {};
  return (
    <div>
      <section className="h-250 flex justify-center items-center mt-60 ">
        <Image alt="logo" src="/assets/main_logo.svg" width={180} height={30} />
      </section>
      <section className="gap-3">
        <AuthInput text="ID" />
        <AuthInput text="PW" />
        <SquareCheckbox text="자동 로그인하기" />
      </section>
      <section>
        <Button text="로그인" onClick={handleLogin} />
        <Button text="다른 계정으로 로그인" onClick={handleLoginOtherAuth} color="orange" />
      </section>
    </div>
  );
}
