'use client';
import BirthdayForm from './BirthdayForm.client';
import GenderBirthdayForm from './GenderForm.client';
import ImageForm from './ImageForm.client';
import NicknameForm from './NicknameForm.client';
import { useJoinContext } from '../../../components/JoinContext';
import { BottomFixedButton } from '@/components/common/Button';
import { Spacing } from '@/components/common/Spacing';

export default function FormSection() {
  const {
    formState: { isDirty, isValid },
  } = useJoinContext();

  return (
    <section>
      <ImageForm />
      <NicknameForm />

      <Spacing size={10} />

      <BirthdayForm />

      <Spacing size={10} />

      <GenderBirthdayForm />

      <Spacing size={10} />

      <BottomFixedButton text={'aaa'} disabled={true} />
    </section>
  );
}
