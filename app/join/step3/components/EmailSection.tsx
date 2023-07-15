import BomttomFixed from '@/components/common/BottomFixed';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { regexr } from '@/constants/regexr';
import clsx from 'clsx';
import Image from 'next/image';
import { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { InputType } from '../type';

interface EmailSectionProps {
  openModal: (type: 'certification') => void;
  register: UseFormRegister<InputType>;
  handleSubmit: UseFormHandleSubmit<InputType>;
  email: string;
  setJoinValue: (value: { email: string }) => void;
  isError: boolean;
}
export default function EmailSection({
  openModal,
  register,
  handleSubmit,
  email,
  setJoinValue,
  isError,
}: EmailSectionProps) {
  const onSubmitEmail: SubmitHandler<InputType> = (data: InputType) => {
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

      <p
        className={clsx('font-500 float flex justify-center gap-5 text-13 text-orange', {
          invisible: !isError,
        })}
      >
        <Image alt="alert" src="/assets/alert.svg" width={10} height={30} />
        학교 이메일을 다시 확인해주세요.
      </p>

      <Spacing size={10} />

      <BomttomFixed>
        <Button
          text="인증하기"
          type="submit"
          disabled={!!isError || email === undefined || email?.length === 0}
        />

        <Spacing size={8} />

        <Button text="다음에 인증하기" color="orange" href="/join/step4" />
      </BomttomFixed>
    </form>
  );
}
