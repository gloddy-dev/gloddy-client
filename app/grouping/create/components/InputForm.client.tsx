'use client';

import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { BottomFixedButton } from '@/components/common/Button';
import ImageFrame from '@/components/common/ImageFrame';
import { Spacing } from '@/components/common/Spacing';
import { useModal } from '@/hooks/useModal';

import DateSection from './inputSection/DateSection';
import DescriptionSection from './inputSection/DescriptionSection';
import LocationSection from './inputSection/LocationSection';
import NumberSectionModal from './inputSection/NumberSection';
import TitleSection from './inputSection/TitleSection';

import type { ImageType } from '@/types';
import type { InputType, ModalNameType } from '../type';

const inputDefaultValues = {
  title: '',
  description: '',
  image: {
    imageFile: null,
    imageBlob: '',
  },
  date: new Date(),
  time: {
    fromHour: '1',
    fromMin: '00',
    fromAmPm: 'AM',
    toHour: '1',
    toMin: '00',
    toAmPm: 'AM',
  },
  meetingLocation: '경희대학교',
};

export default function InputForm() {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const { register, watch, handleSubmit, setValue } = useForm<InputType>({
    defaultValues: inputDefaultValues,
  });

  const { openModal, closeModal, modalName } = useModal<ModalNameType>();

  const handleSubmitButton = (data: InputType) => {
    // TODO : 서버 api 전송
    console.log(data);
  };

  const isAllEntered =
    !!watch('title') &&
    !!watch('description') &&
    !!watch('date') &&
    !!watch('time').fromHour &&
    !!watch('time').fromMin &&
    !!watch('time').fromAmPm &&
    !!watch('time').toHour &&
    !!watch('time').toMin &&
    !!watch('time').toAmPm &&
    !!watch('meetingLocation') &&
    !!watch('meetingNumber');

  return (
    <div>
      <ImageFrame
        setImage={(value: ImageType) => setValue('image', value)}
        imgRef={imgRef}
        imageBlob={watch('image')?.imageBlob}
        shape="square"
      />

      <TitleSection
        register={register('title', {
          required: true,
          maxLength: 20,
        })}
      />

      <Spacing size={15} />

      <DescriptionSection
        register={register('description', {
          required: true,
        })}
      />

      <Spacing size={15} />

      <DateSection
        isModalOpen={modalName === 'meetingDate'}
        openModal={openModal}
        closeModal={closeModal}
        value={{ date: watch('date'), time: watch('time') }}
        setValue={setValue}
      />
      <LocationSection
        isModalOpen={modalName === 'meetingLocation'}
        openModal={openModal}
        closeModal={closeModal}
        value={watch('meetingLocation')}
        setValue={setValue}
      />
      <NumberSectionModal
        isModalOpen={modalName === 'meetingNumber'}
        openModal={openModal}
        closeModal={closeModal}
        value={watch('meetingNumber')}
        setValue={setValue}
      />

      <BottomFixedButton
        text="완료"
        disabled={!isAllEntered}
        onClick={handleSubmit(handleSubmitButton)}
      />
    </div>
  );
}
