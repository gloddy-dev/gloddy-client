'use client';
import EmailSection from './EmailSection.client';
import SubmitSection from './SubmitSection.client';
import { memo } from 'react';

export default memo(function EmailForm() {
  return (
    <form>
      <EmailSection />
      <SubmitSection />
    </form>
  );
});
