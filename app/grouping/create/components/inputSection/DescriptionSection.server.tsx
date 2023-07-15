import { TextArea } from '@/components/common/Input';
import { TextareaHTMLAttributes } from 'react';

import type { InputProps } from '@/components/common/Input/Input';

const TEXT_AREA_COUNT = 30;

export interface DescriptionSectionProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register?: InputProps['register'];
}

export default function DescriptionSection({ ...props }: DescriptionSectionProps) {
  return (
    <section>
      <div className="flex justify-between">
        <div className="mb-5 text-14">활동 소개글</div>
        <div className="text-12 text-gray2">0/{TEXT_AREA_COUNT}</div>
      </div>
      <TextArea placeholder="내용을 입력해주세요." {...props} />
    </section>
  );
}
