import { Input } from '@/components/common/Input';
import { InputProps } from '@/components/common/Input/Input';

export default function TitleSection({ ...props }: Omit<InputProps, 'placeholder'>) {
  return (
    <section>
      <div className="mb-5 text-14">방 제목</div>
      <Input {...props} placeholder="제목을 입력해주세요" />
    </section>
  );
}
