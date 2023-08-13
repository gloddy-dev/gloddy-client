'use client';
import { useJoinContext } from '../../../components/JoinContext';
import { Spacing } from '@/components/common/Spacing';
import TextFieldController from '@/components/TextField/TextFieldController';

export default function NicknameSection() {
  const hookForm = useJoinContext();
  const { register } = hookForm;

  return (
    <section>
      <p className="text-14">닉네임</p>
      <Spacing size={5} />
      <TextFieldController
        placeholder="닉네임을 입력해주세요."
        hookForm={hookForm}
        register={register('nickname', {
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{3,15}$/,
            message: '닉네임은 3~20자의 한글, 영문, 숫자만 사용 가능합니다.',
          },
        })}
        leftCaption="*최소 3글자 이상 15자 이하로 작성해주세요."
        maxCount={15}
      />
    </section>
  );
}
