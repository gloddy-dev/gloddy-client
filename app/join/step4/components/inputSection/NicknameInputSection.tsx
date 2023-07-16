import { Input } from '@/components/common/Input';
import { UseFormRegisterReturn } from 'react-hook-form';

interface NicknameInputSectionProps {
  register: UseFormRegisterReturn<'nickname'>;
}
export default function NicknameInputSection({ register }: NicknameInputSectionProps) {
  return (
    <section className="flex flex-col gap-5">
      <p className="text-14">닉네임</p>
      <Input placeholder="닉네임을 입력해주세요." register={register} />
    </section>
  );
}
