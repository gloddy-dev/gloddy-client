'use client';

import CertificationSection from './CertificationSection.client';
import EmailSection from './EmailSection.client';
import { useTimer } from '@/hooks/useTimer';

export default function InputForm() {
  const { status, time, start } = useTimer({
    initialTime: 180,
    timerType: 'DECREMENTAL',
    endTime: 0,
  });

  return (
    <div>
      <EmailSection timerStart={start} timerStatus={status} />

      <CertificationSection timerTime={time} />
    </div>
  );
}
