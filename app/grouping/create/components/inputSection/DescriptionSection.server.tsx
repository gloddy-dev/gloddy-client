import { useCreateMeetingContext } from '../CreateMeetingContext';
import { TextArea } from '@/components/common/Input';
import clsx from 'clsx';

const TEXT_AREA_COUNT = 30;

export default function DescriptionSection() {
  const { register, watch } = useCreateMeetingContext();
  const isTextOver = watch('description').length > TEXT_AREA_COUNT;

  return (
    <section>
      <div className="flex justify-between">
        <div className="mb-5 text-14">활동 소개글</div>
        <div className="text-12 text-gray2">
          <span className={clsx({ 'text-red-500': isTextOver })}>
            {watch('description').length}
          </span>
          /{TEXT_AREA_COUNT}
        </div>
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
