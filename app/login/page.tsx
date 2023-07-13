'use client';
import Image from 'next/image';

import { Button } from '@/components/common/Button';
import { SquareCheckbox } from '@/components/common/Checkbox';
import { Input } from '@/components/common/Input';

export default function LoginPage() {
  const handleLogin = () => {};
  const handleLoginOtherAuth = () => {};

  return (
    <div>
      <section className="mt-60 flex h-250 items-center justify-center ">
        <Image alt="logo" src="/assets/main_logo.svg" width={180} height={30} />
      </section>
      <section className="gap-3">
        <Input label="ID" />
        <Input label="PW" />
        <SquareCheckbox text="자동 로그인하기" />
      </section>
      <section>
        <Button text="로그인" onClick={handleLogin} />
        <Button text="다른 계정으로 로그인" onClick={handleLoginOtherAuth} color="orange" />
      </section>
    </div>
  );
}
