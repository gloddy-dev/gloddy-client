'use client';

import CreateGroupContextProvider from './CreateGroupContext';
import ContentSection from './inputSection/ContentSection.client';
import ImageSection from './inputSection/ImageSection.client';
import LocationSection from './inputSection/LocationSection.server';
import MeetDateSection from './inputSection/MeetDateSection.server';
import NumberSection from './inputSection/NumberSection.server';
import SubmitSection from './inputSection/SubmitSection';
import TitleSection from './inputSection/TitleSection.server';
import { Spacing } from '@/components/common/Spacing';

export default function InputForm() {
  return (
    <CreateGroupContextProvider>
      <ImageSection />
      <TitleSection />
      <Spacing size={15} />
      <ContentSection />
      <MeetDateSection />
      <LocationSection />
      <NumberSection />
      <Spacing size={15} />
      <SubmitSection />
    </CreateGroupContextProvider>
  );
}
