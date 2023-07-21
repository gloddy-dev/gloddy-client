'use client';

import DateSection from './inputSection/DateSection.server';
import DescriptionSection from './inputSection/DescriptionSection.server';
import ImageSection from './inputSection/ImageSection.client';
import LocationSection from './inputSection/LocationSection.server';
import NumberSection from './inputSection/NumberSection.server';
import SubmitSection from './inputSection/SubmitSection';
import TitleSection from './inputSection/TitleSection.server';
import { Spacing } from '@/components/common/Spacing';
import { FormProvider, useForm } from 'react-hook-form';

import type { CreateMeetingRequestType } from '../type';

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
  const methods = useForm<CreateMeetingRequestType>({
    defaultValues: inputDefaultValues,
  });

  return (
    <div>
      <FormProvider {...methods}>
        <ImageSection />

        <TitleSection />

        <Spacing size={15} />

        <DescriptionSection />

        <DateSection />
        <LocationSection />
        <NumberSection />
        <Spacing size={15} />
        <SubmitSection />
      </FormProvider>
    </div>
  );
}
