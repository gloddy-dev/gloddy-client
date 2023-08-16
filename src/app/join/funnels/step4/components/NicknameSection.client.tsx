'use client';
import { useJoinContext } from '../../../components/JoinContext';
import { Spacing } from '@/components/common/Spacing';
import { TextFieldController } from '@/components/TextField';

export default function NicknameSection() {
  const { control } = useJoinContext();

  return (
    <section>
      <p className="text-14">닉네임</p>
      <Spacing size={5} />
      <TextFieldController
        control={control}
        name="nickname"
        rules={{
          value: /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{3,15}$/,
          message: '* 최소 3글자 이상 15자 이하로 작성해주세요.',
        }}
        as="input"
        placeholder="닉네임을 입력해주세요."
        leftCaption="* 최소 3글자 이상 15자 이하로 작성해주세요."
        maxCount={15}
      />
    </section>
  );
}
