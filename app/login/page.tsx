'use client';
import Image from 'next/image';

import Button from '@/components/common/Button';
import SquareCheckbox from '@/components/common/Checkbox/SquareCheckbox';
import AuthInput from '@/components/common/Input/AuthInput';

export default function LoginPage() {
  const handleLogin = () => {};
  const handleLoginOtherAuth = () => {};
  const idSaved = true;
  if (idSaved)
    return (
      <div>
        <section className="mt-60 flex h-250 items-center justify-center ">
          <Image alt="logo" src="/assets/main_logo.png" width={180} height={30} />
        </section>

        <section className="flex flex-col gap-10">
          <AuthInput text="ID" />
          <AuthInput text="PW" />
          <div className="flex justify-between">
            <SquareCheckbox text="아이디 자동 저장하기" />
            <p className="text-14 text-gray9 underline">PW 찾기</p>
          </div>
        </section>

        <div className="h-60" />

        <section className="flex flex-col gap-10">
          <Button text="로그인" onClick={handleLogin} />
          <div className="flex items-center gap-30">
            <div className="grow border-t-[0.5px] border-gray10" />
            <p className="">또는</p>
            <div className="grow border-t-[0.5px] border-gray10" />
          </div>
          <Button text="회원가입" onClick={handleLoginOtherAuth} color="orange" />
        </section>
      </div>
    );
  else
    return (
      <div>
        <section className="mt-60 flex h-250 flex-col items-center justify-center gap-20 ">
          <div className="h-150 w-150 rounded-full bg-gray9" />
          <p className="text-24 font-700">안기현님, 반가워요 !</p>
        </section>

        <div className="h-25" />

        <section className="flex flex-col gap-10">
          <AuthInput text="PW" />
          <div className="flex justify-between">
            <SquareCheckbox text="자동 로그인하기" />
            <p className="text-14 text-gray9 underline">PW 찾기</p>
          </div>
        </section>

        <div className="h-60" />

        <section className="flex flex-col gap-10">
          <Button text="로그인" onClick={handleLogin} />
          <div className="flex items-center gap-30">
            <div className="grow border-t-[0.5px] border-gray10" />
            <p className="">또는</p>
            <div className="grow border-t-[0.5px] border-gray10" />
          </div>
          <Button text="다른 계정으로 로그인" onClick={handleLoginOtherAuth} color="orange" />
        </section>
      </div>
    );
}
