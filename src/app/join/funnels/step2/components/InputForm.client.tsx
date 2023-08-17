'use client';

import AgreeSection from './AgreeForm.client';
import SchoolSection from './SchoolSection.client';
import { useFunnelContext } from '../../JoinFunnel';
import { useJoinContext } from '@/app/join/components/JoinContext.client';
import { SignUpState } from '@/app/join/type';

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
