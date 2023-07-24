import { useCreateMeetingContext } from '../CreateMeetingContext';
import { BottomFixedButton } from '@/components/common/Button';

import type { CreateMeetingRequestType } from '../../type';

export default function SubmitSection() {
  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = useCreateMeetingContext();
  const onCreateMeetingSubmit = (data: CreateMeetingRequestType) => {
    // TODO : 서버 api 전송
    console.log(data);
  };

  return (
    <BottomFixedButton
      text="완료"
      disabled={!isDirty || !isValid}
      onClick={handleSubmit(onCreateMeetingSubmit)}
    />
  );
}
