'use client';
import BirthdayForm from './BirthdayForm.client';
import GenderForm from './GenderForm.client';
import ImageForm from './ImageForm.client';
import NicknameForm from './NicknameForm.client';
import { Spacing } from '@/components/common/Spacing';

export default function FormSection() {
  return (
    <section className="flex flex-col gap-10">
      <ImageForm />
      <NicknameForm />
      <BirthdayForm />
      <GenderForm />
    </section>
  );
}
