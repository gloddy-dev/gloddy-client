'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import regexr from '@/constants/regexr';

type InputType = {
  phoneNumber: string;
  certificateNumber: number;
};

type InputStatusType = 'default' | 'beforeSend' | 'afterSend';

export default function InputForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<InputType>();

  const router = useRouter();

  const [inputStatus, setInputStatus] = useState<InputStatusType>('default');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    const currentValue = e.currentTarget.value.replace(/[^0-9-]/g, '');
    let formattedValue = currentValue;
    const onlyNumbers = currentValue.replace(/-/g, '');

    if (onlyNumbers.length === 11) {
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

  const onSubmitPhoneNumber: SubmitHandler<InputType> = (data) => {
    console.log(data.phoneNumber);
    // 휴대폰 인증번호 전송 API
    setInputStatus('afterSend');
  };
  const onSubmitCertificateNumber: SubmitHandler<InputType> = (data) => {
    console.log(data.certificateNumber);
    // 인증번호 확인 API
    router.push('/join/step2');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitPhoneNumber)}>
        <Input
          placeholder="휴대폰 번호"
          register={register('phoneNumber', {
            required: true,
            pattern: {
              value: regexr.phoneNumber,
              message: '올바른 휴대폰 번호를 입력해주세요.',
            },
          })}
          maxLength={17}
          onChange={handleInputChange}
          onKeyDown={handleInputChange}
        />

        <div className="h-18" />
        <Button
          text={
            inputStatus === 'beforeSend' || inputStatus === 'default'
              ? '인증문자 전송'
              : '인증번호 재전송'
          }
          disabled={inputStatus === 'default'}
          color={inputStatus === 'beforeSend' ? 'blue' : 'orange'}
          type="submit"
        />
        <div className="h-18" />
      </form>

      {inputStatus === 'afterSend' && (
        <form onSubmit={handleSubmit(onSubmitCertificateNumber)}>
          <Input
            placeholder="인증 번호"
            register={register('certificateNumber', {
              required: true,
              pattern: {
                value: regexr.certificateNumber,
                message: '인증번호 6자리를 입력해주세요.',
              },
            })}
            type="number"
            maxLength={6}
          />
          <div className="h-18" />
          <Button text="인증번호 확인" type="submit" />
        </form>
      )}
      {errors.phoneNumber && errors.phoneNumber?.message}
    </div>
  );
}
