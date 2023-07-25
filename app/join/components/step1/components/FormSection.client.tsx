'use client';

import NumberForm from './NumberForm.client';
import NumberVerifyForm from './NumberVerifyForm.client';
import { useFunnelContext } from '../../JoinFunnel';
import { BottomFixedButton } from '@/components/common/Button';
import { Spacing } from '@/components/common/Spacing';
import { useState } from 'react';

type InputStatusType = 'notReadyForSend' | 'readyForSend' | 'afterSend';

export default function FormSection() {
  const [inputStatus, setInputStatus] = useState<InputStatusType>('notReadyForSend');
  const { nextStep } = useFunnelContext();
  return (
    <div>
      <NumberForm inputStatus={inputStatus} setInputStatus={setInputStatus} />

      <Spacing size={18} />

      {inputStatus === 'afterSend' && <NumberVerifyForm />}
    </div>
  );
}
