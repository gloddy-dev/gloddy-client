'use client';
import { useJoinContext } from '../../../components/JoinContext';
import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';

export default function NicknameSection() {
  const {
    register,
    formState: { errors },
  } = useJoinContext();

  return (
    <section>
      <p className="text-14">닉네임</p>
      <Spacing size={5} />
      <Input
        placeholder="닉네임을 입력해주세요."
        register={register('nickname', {
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{3,20}$/,
            message: '닉네임은 3~20자의 한글, 영문, 숫자만 사용 가능합니다.',
          },
        })}
        errorMessage={errors.nickname?.message}
      />
    </section>
  );
}
