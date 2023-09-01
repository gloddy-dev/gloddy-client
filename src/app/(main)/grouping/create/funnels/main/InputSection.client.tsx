'use client';
import { useCreateGroupContext } from '../../components/CreateGroupContext';
import { Spacing } from '@/components/common/Spacing';
import { TextFieldController } from '@/components/TextField';

export default function InputSection() {
  const hookForm = useCreateGroupContext();
  const { register } = hookForm;

  return (
    <section>
      <div className="px-20 pb-8 pt-20">
        <p className="px-4 text-subtitle-3 text-sign-secondary">방제목</p>
        <Spacing size={4} />
        <TextFieldController
          placeholder="제목을 입력해주세요."
          hookForm={hookForm}
          register={register('title', {
            required: true,
            maxLength: 30,
          })}
          maxCount={30}
        />
      </div>

      <div className="px-20 py-8">
        <p className="px-4 text-subtitle-3 text-sign-secondary">활동 소개글</p>
        <Spacing size={4} />
        <TextFieldController
          placeholder="내용을 입력해주세요."
          register={register('content', {
            required: true,
          })}
          hookForm={hookForm}
          as="textarea"
          maxCount={500}
        />
      </div>
    </section>
  );
}
