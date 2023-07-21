import { Input } from '@/components/common/Input';
import { useFormContext } from 'react-hook-form';

export default function TitleSection() {
  const { register, watch } = useFormContext();
  console.log(watch('title'));

  return (
    <section>
      <div className="mb-5 text-14">방 제목</div>
      <Input
        placeholder="제목을 입력해주세요"
        register={register('title', {
          required: true,
          maxLength: 20,
        })}
      />
    </section>
  );
}
