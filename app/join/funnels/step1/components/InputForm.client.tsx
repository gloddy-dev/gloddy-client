'use client';

import NumberSection from './NumberSection.client';
import NumberVerifySection from './NumberVerifySection.client';
import { Spacing } from '@/components/common/Spacing';
import { useState } from 'react';

import type { StatusType } from '../type';

export default function InputForm() {
  const [inputStatus, setInputStatus] = useState<StatusType>('notReadyForSend');

  return (
    <form>
      <NumberSection inputStatus={inputStatus} setInputStatus={setInputStatus} />
      <Spacing size={18} />
      {inputStatus === 'afterSend' && <NumberVerifySection />}
    </form>
  );
}
