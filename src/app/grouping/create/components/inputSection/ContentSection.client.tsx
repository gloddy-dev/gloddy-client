'use client';
import { useCreateGroupContext } from '../CreateGroupContext';
import { TextFieldController } from '@/components/TextField';
import cn from '@/utils/cn';

const TEXT_AREA_COUNT = 30;

export default function ContentSection() {
  const hookForm = useCreateGroupContext();
  const { watch, register } = hookForm;
  const isTextOver = watch('content').length > TEXT_AREA_COUNT;

  return (
    <section>
      <div className="flex justify-between">
        <div className="mb-5 text-14">활동 소개글</div>
        <div className="text-12 text-gray2">
          <span className={cn({ 'text-red-500': isTextOver })}>{watch('content').length}</span>/
          {TEXT_AREA_COUNT}
        </div>
      </div>
      <TextFieldController
        placeholder="내용을 입력해주세요."
        register={register('content', {
          required: true,
        })}
        hookForm={hookForm}
        as="textarea"
        maxCount={500}
      />
    </section>
  );
}
