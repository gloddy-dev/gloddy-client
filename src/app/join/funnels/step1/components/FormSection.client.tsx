'use client';

import NumberForm from './NumberForm.client';
import NumberVerifyForm from './NumberVerifyForm.client';
import { useState } from 'react';

import type { StatusType } from '../type';

export default function InputForm() {
  const [inputStatus, setInputStatus] = useState<StatusType>('beforeSend');

  return (
    <section>
      <NumberForm inputStatus={inputStatus} setInputStatus={setInputStatus} />
      {inputStatus === 'afterSend' && <NumberVerifyForm />}
    </section>
  );
}
