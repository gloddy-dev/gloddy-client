'use client';
import { useJoinContext } from '../../../components/JoinContext';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';

export default function NicknameForm() {
  const { register } = useJoinContext();

  return (
    <form>
      <p className="text-14">닉네임</p>
      <Spacing size={5} />
      <Input placeholder="닉네임을 입력해주세요." register={register('nickname')} />
    </form>
  );
}
