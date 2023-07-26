'use client';

import CertificationForm from './CertificationForm.client';
import EmailForm from './EmailForm.client';
import { useStep3Context } from '@/components/common/Modal/Step3Context';

export default function FormSection() {
  const { time } = useStep3Context();

  return (
    <section>
      <EmailForm />
      <CertificationForm timerTime={time} />
    </section>
  );
}
