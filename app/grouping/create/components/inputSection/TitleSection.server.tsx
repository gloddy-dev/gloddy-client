import { Input } from '@/components/common/Input';
import { InputProps } from '@/components/common/Input/Input';

export default function TitleSection({ ...props }: InputProps) {
  return (
    <section {...props}>
      <div className="mb-5 text-14">방 제목</div>
      <Input placeholder="제목을 입력해주세요" {...props} />
    </section>
  );
}
