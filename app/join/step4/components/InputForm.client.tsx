'use client';
import BirthdaySection from './inputSection/BirthdaySection.client';
import GenderSection from './inputSection/GenderSection.client';
import ImageFrameSection from './inputSection/ImageFrameSection.client';
import NicknameSection from './inputSection/NicknameSection.client';
import NextButtonSection from './NextButtonSection.client';
import { Spacing } from '@/components/common/Spacing';

export default function InputForm() {
  return (
    <div>
      <ImageFrameSection />
      <NicknameSection />
      <Spacing size={10} />
      <BirthdaySection />
      <Spacing size={10} />
      <GenderSection />
      <Spacing size={10} />
      <NextButtonSection />
    </div>
  );
}
