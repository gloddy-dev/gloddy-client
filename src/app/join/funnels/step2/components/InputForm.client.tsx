'use client';

import SchoolSearchSection from './SchoolSearchSection.client';
import { useFunnelContext } from '../../JoinFunnel';
import { useJoinContext } from '@/app/join/components/JoinContext.client';
import { SignUpState } from '@/app/join/type';
import { Button, ButtonGroup } from '@/components/Button';

export default function InputForm() {
  const {
    handleSubmit,
    formState: { isValid },
  } = useJoinContext();
  const { nextStep } = useFunnelContext();

  const onSubmit = (data: Pick<SignUpState, 'schoolInfo'>) => {
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SchoolSearchSection />
      <ButtonGroup>
        <Button disabled={!isValid}>확인</Button>
      </ButtonGroup>
    </form>
  );
}
