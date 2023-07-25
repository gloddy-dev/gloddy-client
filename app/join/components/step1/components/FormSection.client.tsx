'use client';

import NumberForm from './NumberForm.client';
import NumberVerifyForm from './NumberVerifyForm.client';
import { Spacing } from '@/components/common/Spacing';
import { useState } from 'react';

import type { InputStatusType } from '../type';

export default function FormSection() {
  const [inputStatus, setInputStatus] = useState<InputStatusType>('notReadyForSend');
  return (
    <div>
      <NumberForm inputStatus={inputStatus} setInputStatus={setInputStatus} />

      <Spacing size={18} />

      {inputStatus === 'afterSend' && <NumberVerifyForm />}
    </div>
  );
}
