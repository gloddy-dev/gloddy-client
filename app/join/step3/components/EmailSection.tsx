import BomttomFixedDiv from '@/components/common/BomttomFixedDiv';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { regexr } from '@/constants/regexr';
import useJoinStore from '@/store/useJoinStore';
import useModalStore from '@/store/useModalStore';
import clsx from 'clsx';
import Image from 'next/image';
import { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

import type { Step3InputType } from '../type';

interface EmailSectionProps {
  register: UseFormRegister<Step3InputType>;
  handleSubmit: UseFormHandleSubmit<Step3InputType>;
  email: string;
  isError: boolean;
}

export default function EmailSection({
  register,
  handleSubmit,
  email,
  isError,
}: EmailSectionProps) {
  const { openModal } = useModalStore();
  const { setJoinValue } = useJoinStore();

  const onSubmitEmail: SubmitHandler<Step3InputType> = (data: Step3InputType) => {
    openModal('certification');
    setJoinValue({ email: data.email });
    // 인증번호 전송
  };

  return (
    <form onSubmit={handleSubmit(onSubmitEmail)}>
      <section>
        <Input
          label="ID"
          register={register('email', {
            required: true,
            pattern: regexr.email,
          })}
        />
      </section>

      <section
        className={clsx('font-500 flex justify-center text-13 text-orange', {
          invisible: !isError,
        })}
      >
        <Image alt="alert" src="/assets/alert.svg" width={10} height={30} />
        <Spacing size={5} direction="horizontal" />
        <span>학교 이메일을 다시 확인해주세요.</span>
      </section>

      <Spacing size={10} />

      <BomttomFixedDiv>
        <Button
          text="인증하기"
          type="submit"
          disabled={!!isError || !email || email?.length === 0}
        />

        <Spacing size={8} />

        <Button text="다음에 인증하기" color="orange" href="/join/step4" />
      </BomttomFixedDiv>
    </form>
  );
}
