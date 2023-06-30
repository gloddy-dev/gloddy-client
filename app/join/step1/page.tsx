'use client';

import Button from '@/components/common/Button';
import CircleCheckbox from '@/components/common/Checkbox/CircleCheckbox';
import AuthInput from '@/components/common/Input/AuthInput';
import { TitleTextMessage } from '@/components/join/TextMessage';
import { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  phoneNumber: string;
};

type InputStatusType = 'default' | 'beforeSend' | 'afterSend';

export default function Step1Page() {
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const [inputStatus, setInputStatus] = useState<InputStatusType>('default');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    const currentValue = e.currentTarget.value.replace(/[^0-9-]/g, '');
    let formattedValue = currentValue;
    const onlyNumbers = currentValue.replace(/-/g, '');

    if (currentValue.length > 0) {
      setInputStatus('beforeSend');
    }

    if ('key' in e && e.key === 'Backspace') {
      if (onlyNumbers.length === 3) {
        formattedValue = `${onlyNumbers.slice(0, 3)}`;
      } else if (onlyNumbers.length === 7) {
        formattedValue = `${onlyNumbers.slice(0, 7)}`;
      }
    } else {
      if (onlyNumbers.length > 2) {
        if (onlyNumbers.length > 6) {
          formattedValue = `${onlyNumbers.slice(0, 3)} - ${onlyNumbers.slice(
            3,
            7
          )} - ${onlyNumbers.slice(7)}`;
        } else {
          formattedValue = `${onlyNumbers.slice(0, 3)} - ${onlyNumbers.slice(3)}`;
        }
      }
    }
    setValue('phoneNumber', formattedValue);
  };

  const handleSNSButon = () => {};

  return (
    <div>
      <TitleTextMessage text={`휴대폰 번호를\n인증해주세요`} />
      <div className="h-30" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          placeholder="휴대폰 번호"
          register={register('phoneNumber', { required: true })}
          type="number"
          maxLength={17}
          onChange={handleInputChange}
          onKeyDown={handleInputChange}
        />
        <div className="h-18" />
        <Button
          text="인증문자 전송"
          onClick={handleSNSButon}
          disabled={inputStatus === 'default'}
          color={inputStatus === 'beforeSend' ? 'blue' : 'orange'}
          type="submit"
        />
        <div className="h-18" />
      </form>
      <CircleCheckbox
        text={<span className=" text-[0.875rem]">휴대폰 번호는 안전하게 보관됩니다.</span>}
        checked
      />
      <div className="h-10" />
      <CircleCheckbox
        text={<span className=" text-[0.875rem]">휴대폰 번호는 어디에도 공개되지 않습니다.</span>}
        checked
      />
    </div>
  );
}
