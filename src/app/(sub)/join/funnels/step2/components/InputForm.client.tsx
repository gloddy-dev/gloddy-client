'use client';

import SchoolSearchSection from './SchoolSearchSection.client';
import { useJoinContext } from '../../../components/JoinContext.client';
import { useFunnelContext } from '../../JoinFunnel';
import { Button, ButtonGroup } from '@/components/Button';

import type { SignUpState } from '../../../type';

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
