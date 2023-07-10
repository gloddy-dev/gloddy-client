'use client';
import { useForm } from 'react-hook-form';

import { Input } from '@/components/common/Input';

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

  const onSubmit = (data: InputType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="학교"
        register={register('school', {
          required: true,
        })}
      />
    </form>
  );
}
