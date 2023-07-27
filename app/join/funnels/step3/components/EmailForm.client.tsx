'use client';
import EmailSection from './EmailSection.client';
import SubmitSection from './SubmitSection.client';
import { useJoinContext } from '../../../components/JoinContext';
import { Spacing } from '@/components/common/Spacing';
import { memo } from 'react';

export default memo(function EmailForm() {
  const {
    formState: { errors },
  } = useJoinContext();

  return (
    <form>
      <EmailSection />
      <SubmitSection />
    </form>
  );
});
