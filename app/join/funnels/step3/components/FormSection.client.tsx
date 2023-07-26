'use client';

import CertificationForm from './CertificationForm.client';
import EmailForm from './EmailForm.client';

export default function FormSection() {
  return (
    <section>
      <EmailForm />
      <CertificationForm />
    </section>
  );
}
