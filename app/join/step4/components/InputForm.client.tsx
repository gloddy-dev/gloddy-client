'use client';

import { Button } from '@/components/common/Button';
import ImageFrame from '@/components/common/ImageFrame';
import { Input } from '@/components/common/Input';
import { BottomUpModal } from '@/components/common/Modal';
import { Spacing } from '@/components/common/Spacing';
import DateSwipePicker from '@/components/common/SwipePicker/DateSwipePicker';
import SexSwipePicker from '@/components/common/SwipePicker/SexSwipePicker';
import { useModals } from '@/hooks/useModals';
import useJoin from '@/store/useJoin';
import { useRouter } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { BirthdayValueType, ImageType } from '@/types';

type InputType = {
  nickname: string;
  profileImage: ImageType;
  birthday: BirthdayValueType;
  gender: string;
};

export default function InputForm() {
  const imgRef = useRef<HTMLInputElement>(null);
  const { isModalOpen, modalName, openModal, closeModal } = useModals<'birthday' | 'gender'>();
  const { setJoinValue } = useJoin();
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
      gender: '',
    },
  });

  const isBirthDayEntered =
    !!watch('birthday').year && !!watch('birthday').month && !!watch('birthday').date;

  const isAllEntered = isBirthDayEntered && !!watch('nickname') && !!watch('gender');

  const handleModalNextButton = () => {
    if (modalName === 'birthday') {
      openModal('gender');
      return;
    }
    if (modalName === 'gender') {
      if (watch('gender') === '') {
        setValue('gender', '남성');
      }
      closeModal();
    }
  };

  const onSubmitForm = (data: InputType) => {
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

      <BirthdaySection />

      <Spacing size={10} />

      <SexSection />

      <Spacing size={10} />

      <BottomFixedButton
        text={isAllEntered ? '완료' : '다음'}
        disabled={!isAllEntered}
        type="submit"
        onClick={handleSubmit(onSubmitForm)}
      />
    </div>
  );
}
