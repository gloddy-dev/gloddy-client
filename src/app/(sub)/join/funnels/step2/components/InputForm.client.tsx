'use client';

import AgreeSection from './AgreeForm.client';
import SchoolSection from './SchoolSection.client';
import { useJoinContext } from '../../../components/JoinContext.client';
import { useFunnelContext } from '../../JoinFunnel';

import type { SignUpState } from '../../../type';

export default function InputForm() {
  const { handleSubmit } = useJoinContext();
  const { nextStep } = useFunnelContext();
  const onSubmit = (data: Pick<SignUpState, 'schoolInfo'>) => {
    console.log(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SchoolSection />
      <AgreeSection />
    </form>
  );
}
