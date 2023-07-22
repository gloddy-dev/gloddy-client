'use client';
import MateComponent from './mate/MateComponent';
import PraiseComponent from './praise/PraiseComponent';
import { useFeedbackContext } from '../FeedbackContext';
import { useFunnel } from '@/hooks/useFunnel';

import type { FeedbackRequestType } from '../type';

export default function FeedbackWrapper() {
  const { Funnel, prevStep, nextStep } = useFunnel(['praise', 'mate']);
  const { handleSubmit, control } = useFeedbackContext();

  const onSubmit = (data: FeedbackRequestType) => {
    console.log(data);
  };

  return (
    <Funnel>
      <Funnel.Step name="praise">
        <PraiseComponent onPrevClick={prevStep} onNextClick={nextStep} />
      </Funnel.Step>
      <Funnel.Step name="mate">
        <MateComponent
          onPrevClick={prevStep}
          onNextClick={handleSubmit(onSubmit)}
          control={control}
        />
      </Funnel.Step>
    </Funnel>
  );
}
