'use client';
import { useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import useJoin from '@/store/useJoin';

type InputType = {
  school: string;
};

export default function InputForm() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<InputType>();

  const { setJoinValue } = useJoin();

  const onSubmit = (data: InputType) => {
    setJoinValue('school', data.school);
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
