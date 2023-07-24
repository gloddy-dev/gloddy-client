'use client';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';
import useJoinStore from '@/store/useJoinStore';

export default function NicknameSection() {
  const { name, setJoinValue } = useJoinStore();

  return (
    <section>
      <p className="text-14">닉네임</p>
      <Spacing size={5} />
      <Input
        placeholder="닉네임을 입력해주세요."
        onChange={(e) => setJoinValue({ name: e.target.value })}
        value={name}
      />
    </section>
  );
}
