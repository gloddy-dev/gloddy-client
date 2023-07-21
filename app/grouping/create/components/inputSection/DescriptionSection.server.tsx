import { useCreateMeetingContext } from '../CreateMettingContext';
import { TextArea } from '@/components/common/Input';

const TEXT_AREA_COUNT = 30;

export default function DescriptionSection() {
  const { register } = useCreateMeetingContext();

  return (
    <section>
      <div className="flex justify-between">
        <div className="mb-5 text-14">활동 소개글</div>
        <div className="text-12 text-gray2">0/{TEXT_AREA_COUNT}</div>
      </div>
      <TextArea
        placeholder="내용을 입력해주세요."
        {...register('description', {
          required: true,
        })}
      />
    </section>
  );
}
