'use client';

import BirthdaySection from './inputSection/BirthdaySection';
import GenderSection from './inputSection/GenderSection';
import NicknameSection from './inputSection/NicknameSection';
import { InputType } from '../type';
import { BottomFixedButton } from '@/components/common/Button';
import ImageFrame from '@/components/common/ImageFrame';
import { Spacing } from '@/components/common/Spacing';
import useJoinStore from '@/store/useJoinStore';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import type { BirthdayValueType, GenderType, ImageType } from '@/types';

export default function InputForm() {
  const imgRef = useRef<HTMLInputElement>(null);
  const { setJoinValue } = useJoinStore();
  const router = useRouter();

  const { register, watch, handleSubmit, setValue } = useForm<InputType>({
    defaultValues: {
      nickname: '',
      profileImage: {
        imageFile: null,
        imageBlob: '',
      },
      birthday: {
        year: '',
        month: '',
        date: '',
      },
    },
  });

  const isBirthDayEntered =
    !!watch('birthday').year && !!watch('birthday').month && !!watch('birthday').date;

  const isAllEntered = isBirthDayEntered && !!watch('nickname') && !!watch('gender');

  const onFormSubmit = (data: InputType) => {
    const { nickname, profileImage, birthday, gender } = data;
    // TODO profileImage 추가 : 백엔드와 소통 필요
    setJoinValue({
      gender,
      name: nickname,
      birth: `${birthday.year}-${birthday.month}-${birthday.date}`,
    });

    router.push('/join/step5');
  };

  return (
    <div>
      <ImageFrame
        setImage={(value: ImageType) => setValue('profileImage', value)}
        imgRef={imgRef}
        imageBlob={watch('profileImage').imageBlob}
      />

      <NicknameSection
        register={register('nickname', {
          required: true,
        })}
      />

      <Spacing size={10} />

      <BirthdaySection
        setValue={(value: BirthdayValueType) => setValue('birthday', value)}
        value={watch('birthday')}
      />

      <Spacing size={10} />

      <GenderSection
        value={watch('gender')}
        setValue={(value: GenderType) => setValue('gender', value)}
      />

      <Spacing size={10} />

      <BottomFixedButton
        text={isAllEntered ? '완료' : '다음'}
        disabled={!isAllEntered}
        type="submit"
        onClick={handleSubmit(onFormSubmit)}
      />
    </div>
  );
}
