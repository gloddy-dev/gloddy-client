'use client';

import DateSection from './inputSection/DateSection.server';
import DescriptionSection from './inputSection/DescriptionSection.server';
import LocationSection from './inputSection/LocationSection.server';
import NumberSection from './inputSection/NumberSection.server';
import TitleSection from './inputSection/TitleSection.server';
import { BottomFixedButton } from '@/components/common/Button';
import ImageFrame from '@/components/common/ImageFrame';
import { Spacing } from '@/components/common/Spacing';
import { useModal } from '@/hooks/useModal';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import type { CreateMeetingRequestType, ModalNameType } from '../type';
import type { ImageType } from '@/types';

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
  meetingLocation: '',
  meetingNumber: 0,
};

export default function InputForm() {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const { register, watch, handleSubmit, setValue } = useForm<CreateMeetingRequestType>({
    defaultValues: inputDefaultValues,
  });

  const { openModal, closeModal, modalName } = useModal<ModalNameType>();

  const handleSubmitButton = (data: CreateMeetingRequestType) => {
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

      <DateSection value={{ date: watch('date'), time: watch('time') }} setValue={setValue} />
      <LocationSection value={watch('meetingLocation')} setValue={setValue} />
      <NumberSection value={watch('meetingNumber')} setValue={setValue} />

      <BottomFixedButton
        text="완료"
        disabled={!isAllEntered}
        onClick={handleSubmit(handleSubmitButton)}
      />
    </div>
  );
}
