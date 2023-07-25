'use client';
import { useCreateGroupContext } from '../CreateGroupContext';
import { BottomFixedButton } from '@/components/common/Button';

import type { CreateGroupContextValue } from '../../type';
import type { CreateGroupRequest } from '@/apis/groups';

export default function SubmitSection() {
  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = useCreateGroupContext();
  const onCreateGroupSubmit = (data: CreateGroupContextValue) => {
    // TODO : 서버 api 전송
    console.log(data);
  };

  return (
    <BottomFixedButton
      text="완료"
      disabled={!isDirty || !isValid}
      onClick={handleSubmit(onCreateGroupSubmit)}
    />
  );
}
