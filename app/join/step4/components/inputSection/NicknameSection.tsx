import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import { UseFormRegisterReturn } from 'react-hook-form';

interface NicknameInputSectionProps {
  register: UseFormRegisterReturn<'nickname'>;
}
export default function NicknameSection({ register }: NicknameInputSectionProps) {
  return (
    <section>
      <p className="text-14">닉네임</p>
      <Spacing size={5} />
      <Input placeholder="닉네임을 입력해주세요." register={register} />
    </section>
  );
}
