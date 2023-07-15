import { Input } from '@/components/common/Input';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TitleSectionProps {
  register: UseFormRegisterReturn<'title'>;
}

export default function TitleSection({ register }: TitleSectionProps) {
  return (
    <section>
      <div className="mb-5 text-14">방 제목</div>
      <Input placeholder="제목을 입력해주세요" {...register} />
    </section>
  );
}
