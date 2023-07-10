'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import useJoin from '@/store/useJoin';

type InputType = {
  school: string;
};

export default function InputForm() {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<InputType>();

  const { setJoinValue } = useJoin();

  const onSubmit = (data: InputType) => {
    setJoinValue('school', data.school);
    router.push('/join/step3');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="학교"
        register={register('school', {
          required: true,
        })}
      />

      <Button text="완료" type="submit" className="absolute bottom-0 w-full" />
    </form>
  );
}
