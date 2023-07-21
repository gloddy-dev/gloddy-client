'use client';

import CreateMeetingContextProvider from './CreateMettingContext';
import DateSection from './inputSection/DateSection.server';
import DescriptionSection from './inputSection/DescriptionSection.server';
import ImageSection from './inputSection/ImageSection.client';
import LocationSection from './inputSection/LocationSection.server';
import NumberSection from './inputSection/NumberSection.server';
import SubmitSection from './inputSection/SubmitSection';
import TitleSection from './inputSection/TitleSection.server';
import { Spacing } from '@/components/common/Spacing';

export default function InputForm() {
  return (
    <CreateMeetingContextProvider>
      <ImageSection />
      <TitleSection />
      <Spacing size={15} />
      <DescriptionSection />
      <DateSection />
      <LocationSection />
      <NumberSection />
      <Spacing size={15} />
      <SubmitSection />
    </CreateMeetingContextProvider>
  );
}
