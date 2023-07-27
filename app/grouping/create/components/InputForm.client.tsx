'use client';

import ContentSection from './inputSection/ContentSection.client';
import ImageSection from './inputSection/ImageSection.client';
import LocationSection from './inputSection/LocationSection.client';
import MaxUserSection from './inputSection/MaxUserSection.client';
import MeetDateSection from './inputSection/MeetDateSection.client';
import SubmitSection from './inputSection/SubmitSection';
import TitleSection from './inputSection/TitleSection.server';
import { Spacing } from '@/components/common/Spacing';

export default function InputForm() {
  return (
    <form>
      <ImageSection />
      <TitleSection />
      <Spacing size={15} />
      <ContentSection />
      <MeetDateSection />
      <LocationSection />
      <MaxUserSection />
      <Spacing size={100} />
      <SubmitSection />
    </form>
  );
}
