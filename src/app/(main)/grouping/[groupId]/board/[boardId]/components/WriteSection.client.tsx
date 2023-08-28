'use client';

import { usePostComment } from '@/apis/groups';
import BottomFixedDiv from '@/components/common/BottomFixedDiv';
import { TextFieldController } from '@/components/TextField';
import { useNumberParams } from '@/hooks/useNumberParams';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

type CommentFormType = {
  content: string;
};

export default function WriteSection() {
  const { boardId, groupId } = useNumberParams<['boardId', 'groupId']>();
  const { mutate: mutateComment } = usePostComment(groupId, boardId);
  const hookForm = useForm<CommentFormType>({
    mode: 'onChange',
    defaultValues: {
      content: '',
    },
  });

  const { register, handleSubmit } = hookForm;

  const onSubmit = ({ content }: CommentFormType) => {
    mutateComment({ content, groupId, articleId: boardId });
    hookForm.reset();
  };

  return (
    <BottomFixedDiv>
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-8">
        <div className="grow">
          <TextFieldController
            as="input"
            hookForm={hookForm}
            register={register('content', {
              required: true,
            })}
            placeholder="댓글 쓰기"
          />
        </div>
        <button
          type="submit"
          className="flex h-48 w-48 items-center justify-center rounded-full bg-primary"
        >
          <Image src="/icons/24/send.svg" alt="send" width={24} height={24} />
        </button>
      </form>
    </BottomFixedDiv>
  );
}
