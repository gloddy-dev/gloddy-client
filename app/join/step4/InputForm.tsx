'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import ImageFrame from '@/components/common/ImageFrame/ImageFrame';
import { Input } from '@/components/common/Input';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';
import DateSwipePicker from '@/components/common/SwipePicker/DateSwipePicker';
import SexSwipePicker from '@/components/common/SwipePicker/SexSwipePicker';
import { useModal } from '@/hooks/useModal';
import useJoin from '@/store/useJoin';

import type { BirthdayValueType, ImageType } from '@/types';

type InputType = {
  nickname: string;
  profileImage: ImageType;
  birthday: BirthdayValueType;
  gender: string;
};

export default function InputForm() {
  const imgRef = useRef<HTMLInputElement>(null);
  const { isModalOpen, modalName, openModal, closeModal } = useModal<'birthday' | 'gender'>();
  const { setMultipleJoinValues } = useJoin();
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
    if (modalName === 'birthday') openModal('gender');
    if (modalName === 'gender' && watch('gender') === '') setValue('gender', '남성');
    if (modalName === 'gender') closeModal();
  };

  const onSubmitForm = (data: InputType) => {
    const { nickname, profileImage, birthday, gender } = data;
    // TODO profileImage 추가 : 백엔드와 소통 필요
    setMultipleJoinValues({
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

      <section className="flex flex-col gap-10">
        <article className="flex flex-col gap-5">
          <p className="text-14">닉네임</p>
          <Input
            placeholder="닉네임을 입력해주세요."
            register={register('nickname', {
              required: true,
            })}
          />
        </article>

        <article className="flex flex-col gap-5">
          <p className="text-14">생년월일</p>
          <Input
            placeholder="생년월일을 선택해주세요."
            onClick={() => openModal('birthday')}
            value={
              watch('birthday').year &&
              watch('birthday').month &&
              watch('birthday').date &&
              `${watch('birthday').year} ${watch('birthday').month} ${watch('birthday').date}`
            }
            readOnly
          />
        </article>

        <article className="flex flex-col gap-5">
          <p className="text-14">성별</p>
          <Input
            placeholder="성별을 선택해주세요."
            onClick={() => openModal('gender')}
            value={watch('gender')}
            readOnly
          />
        </article>
      </section>

      <Button
        text={isAllEntered ? '완료' : '다음'}
        disabled={!isAllEntered}
        type="submit"
        className="absolute bottom-0 w-full"
        onClick={handleSubmit(onSubmitForm)}
      />

      <BottomUpModal
        isModalOpen={isModalOpen}
        snap={400}
        onClose={closeModal}
        isRightButton
        text={
          <p className="font-500 text-18 text-gray7">
            {modalName === 'birthday' ? '생년월일' : '성별'}
          </p>
        }
        disableDrag
      >
        {modalName === 'birthday' && (
          <DateSwipePicker
            birthdayValue={watch('birthday')}
            setBirthdayValue={(value: BirthdayValueType) => setValue('birthday', value)}
          />
        )}
        {modalName === 'gender' && (
          <SexSwipePicker
            sexValue={watch('gender')}
            setSexValue={(value: string) => setValue('gender', value)}
          />
        )}
        <Button
          text={modalName === 'birthday' ? '다음' : '완료'}
          disabled={modalName === 'birthday' && !isBirthDayEntered}
          onClick={handleModalNextButton}
          className="absolute bottom-0 w-full"
        />
      </BottomUpModal>
    </div>
  );
}
