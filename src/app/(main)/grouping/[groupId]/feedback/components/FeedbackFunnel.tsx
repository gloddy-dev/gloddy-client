'use client';
import MateComponent from './mate/MateComponent';
import PraiseComponent from './praise/PraiseComponent';
import { useFunnel } from '@/hooks/useFunnel';

import type { FeedbackRequestType } from '../type';

export default function FeedbackFunnel() {
  const { Funnel, prevStep, nextStep } = useFunnel(['praise', 'mate']);

  const handleSubmit = (data: FeedbackRequestType) => {
    console.log(data);
  };

  return (
    <Funnel>
      <Funnel.Step name="praise">
        <PraiseComponent onPrevClick={prevStep} onNextClick={nextStep} />
      </Funnel.Step>
      <Funnel.Step name="mate">
        <MateComponent onPrevClick={prevStep} onNextClick={handleSubmit} />
      </Funnel.Step>
    </Funnel>
  );
}
