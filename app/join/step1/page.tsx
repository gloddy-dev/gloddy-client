'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import CircleCheckbox from '@/components/common/Checkbox/CircleCheckbox';
import AuthInput from '@/components/common/Input/AuthInput';
import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';
import { TitleTextMessage } from '@/components/join/TextMessage';
import regexr from '@/constants/regexr';

type Inputs = {
  phoneNumber: string;
  certificateNumber: number;
};

type InputStatusType = 'default' | 'beforeSend' | 'afterSend';

export default function Step1Page() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const [inputStatus, setInputStatus] = useState<InputStatusType>('default');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    const currentValue = e.currentTarget.value.replace(/[^0-9-]/g, '');
    let formattedValue = currentValue;
    const onlyNumbers = currentValue.replace(/-/g, '');

    if (currentValue.length > 0 && inputStatus === 'default') {
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

  const onSubmitPhoneNumber: SubmitHandler<Inputs> = (data) => {
    console.log(data.phoneNumber);
    // 휴대폰 인증번호 전송 API
    setInputStatus('afterSend');
  };
  const onSubmitCertificateNumber: SubmitHandler<Inputs> = (data) => {
    console.log(data.certificateNumber);
    // 인증번호 확인 API
    router.push('/join/step2');
  };

  return (
    <div>
      <TopNavigationBar text="회원가입" />
      <section>
        <TitleTextMessage text={`휴대폰 번호를\n인증해주세요`} />
      </section>

      <form onSubmit={handleSubmit(onSubmitPhoneNumber)}>
        <AuthInput
          placeholder="휴대폰 번호"
          register={register('phoneNumber', {
            required: true,
            pattern: {
              value: regexr.phoneNumber,
              message: '올바른 휴대폰 번호를 입력해주세요.',
            },
          })}
          type="number"
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
          <AuthInput
            placeholder="인증 번호"
            register={register('certificateNumber', {
              required: true,
              pattern: { value: /^\d{6}$/, message: '인증번호 6자리를 입력해주세요.' },
            })}
            type="number"
            maxLength={6}
          />
          <div className="h-18" />
          <Button text="인증번호 확인" type="submit" />
        </form>
      )}

      <div className="h-18" />

      <section>
        <CircleCheckbox
          text={<span className=" text-[0.875rem]">휴대폰 번호는 안전하게 보관됩니다.</span>}
          checked
        />
        <div className="h-10" />
        <CircleCheckbox
          text={<span className=" text-[0.875rem]">휴대폰 번호는 어디에도 공개되지 않습니다.</span>}
          checked
        />
      </section>

      {errors.phoneNumber && errors.phoneNumber?.message}
    </div>
  );
}
