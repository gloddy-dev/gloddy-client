'use client';

import { useState } from 'react';

import NumberForm from './NumberForm';
import NumberVerifyForm from './NumberVerifyForm';

import type { StatusType } from '../type';

import TimerProvider from '@/components/Provider/TimerProvider';

export default function InputForm() {
  const [inputStatus, setInputStatus] = useState<StatusType>('beforeSend');

  return (
    <TimerProvider>
      <NumberForm inputStatus={inputStatus} setInputStatus={setInputStatus} />
      {inputStatus === 'afterSend' && <NumberVerifyForm setInputStatus={setInputStatus} />}
    </TimerProvider>
  );
}
