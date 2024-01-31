'use client';
import DeleteHeader from './DeleteHeader';
import DeleteProvider from './DeleteProvider.client';
import Step1 from './Step1';
import Step2 from './Step2';
import useAppRouter from '@/hooks/useAppRouter';
import { useFunnel } from '@/hooks/useFunnel';

export default function DeleteSection() {
  const { Funnel, nextStep, prevStep } = useFunnel(['1', '2']);
  const { push } = useAppRouter();
  return (
    <DeleteProvider>
      <Funnel>
        <Funnel.Step name="1">
          <DeleteHeader onPrevClick={() => push('/profile/setting')} icon="close" />
          <Step1 onNextClick={nextStep} />
        </Funnel.Step>
        <Funnel.Step name="2">
          <DeleteHeader onPrevClick={prevStep} icon="arrow_back" />
          <Step2 />
        </Funnel.Step>
      </Funnel>
    </DeleteProvider>
  );
}
