'use client';
import MateComponent from './mate/MateComponent';
import PraiseComponent from './praise/PraiseComponent';
import { useFunnel } from '@/hooks/useFunnel';

export default function FeedbackWrapper() {
  const { Funnel, prevStep, nextStep } = useFunnel(['praise', 'mate']);

  return (
    <Funnel>
      <Funnel.Step name="praise">
        <PraiseComponent onPrevClick={prevStep} onNextClick={nextStep} />
      </Funnel.Step>
      <Funnel.Step name="mate">
        <MateComponent onPrevClick={prevStep} onNextClick={nextStep} />
      </Funnel.Step>
    </Funnel>
  );
}
