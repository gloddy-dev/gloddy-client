'use client';

import NumberForm from './NumberForm.client';
import NumberVerifyForm from './NumberVerifyForm.client';
import TimerProvider from '@/components/Provider/TimerProvider.client';
import { useState } from 'react';

import type { StatusType } from '../type';

export default function InputForm() {
  const [inputStatus, setInputStatus] = useState<StatusType>('beforeSend');

  return (
    <TimerProvider>
      <NumberForm inputStatus={inputStatus} setInputStatus={setInputStatus} />
      {inputStatus === 'afterSend' && <NumberVerifyForm />}
    </TimerProvider>
  );
}
