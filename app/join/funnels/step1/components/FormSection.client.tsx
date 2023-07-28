'use client';

import NumberForm from './NumberForm.client';
import NumberVerifyForm from './NumberVerifyForm.client';
import { Spacing } from '@/components/common/Spacing';
import { useState } from 'react';

import type { StatusType } from '../type';

export default function InputForm() {
  const [inputStatus, setInputStatus] = useState<StatusType>('notReadyForSend');

  return (
    <section>
      <NumberForm inputStatus={inputStatus} setInputStatus={setInputStatus} />
      <Spacing size={18} />
      {inputStatus === 'afterSend' && <NumberVerifyForm />}
    </section>
  );
}
