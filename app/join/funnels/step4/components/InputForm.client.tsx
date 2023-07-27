'use client';
import BirthdaySection from './BirthdaySection.client';
import GenderSection from './GenderSection.client';
import ImageSection from './ImageSection.client';
import NicknameSection from './NicknameSection.client';
import SubmitSection from './SubmitSection.client';

export default function InputForm() {
  return (
    <section className="flex flex-col gap-10">
      <ImageSection />
      <NicknameSection />
      <BirthdaySection />
      <GenderSection />
      <SubmitSection />
    </section>
  );
}
