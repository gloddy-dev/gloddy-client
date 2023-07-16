import { TextArea } from '@/components/common/Input';
import { UseFormRegisterReturn } from 'react-hook-form';

const TEXT_AREA_COUNT = 30;

interface DescriptionSectionProps {
  register: UseFormRegisterReturn<'description'>;
}

export default function DescriptionSection({ register }: DescriptionSectionProps) {
  return (
    <section>
      <div className="flex justify-between">
        <div className="mb-5 text-14">활동 소개글</div>
        <div className="text-12 text-gray2">0/{TEXT_AREA_COUNT}</div>
      </div>
      <TextArea placeholder="내용을 입력해주세요." {...register} />
    </section>
  );
}
