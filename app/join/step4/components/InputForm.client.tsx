'use client';
import BirthdaySection from './inputSection/BirthdaySection';
import GenderSection from './inputSection/GenderSection';
import ImageFrameSection from './inputSection/ImageFrameSection';
import NicknameSection from './inputSection/NicknameSection';
import NextButtonSection from './NextButtonSection';
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
