import { CreateMeetingRequestType } from '../../type';
import { BottomFixedButton } from '@/components/common/Button';
import { useFormContext } from 'react-hook-form';

export default function SubmitSection() {
  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = useFormContext();

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
