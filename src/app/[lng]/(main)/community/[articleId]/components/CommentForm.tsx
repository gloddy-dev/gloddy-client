'use client';

import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { useCreateCommunityReply, usePostCreateComment } from '@/apis/community';
import { useComment } from '@/app/[lng]/(main)/community/[articleId]/components/CommentSection';
import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { TextFieldController } from '@/components/TextField';
import { useNumberParams } from '@/hooks/useNumberParams';
import cn from '@/utils/cn';

export type CreateCommentRequest = {
  content: string;
};

export default function CommentForm() {
  const { t } = useTranslation('community');
  const { articleId } = useNumberParams<['articleId']>();
  const { commentType, commentId, setCommentType } = useComment();
  const { mutate: mutateComment } = usePostCreateComment(articleId);
  const { mutate: mutateReply } = useCreateCommunityReply(articleId);
  const hookForm = useForm<CreateCommentRequest>({
    mode: 'onChange',
    defaultValues: {
      content: '',
    },
  });
  const textareaRef = useRef<HTMLInputElement>(null);

  const { handleSubmit, reset, watch, register } = hookForm;

  const onSubmit = ({ content }: CreateCommentRequest) => {
    reset();
    if (commentId && commentType === 'reply') {
      mutateReply({ params: { articleId, commentId }, payload: { content } });
    } else if (commentType === 'comment') {
      console.log(commentType, commentId);
      mutateComment({ params: { articleId }, payload: { content } });
    }
  };

  const handleBlur = () => {
    setCommentType('comment');
  };

  return (
    <div className="bottom-fixed bg-white">
      <form className="flex items-start gap-8">
        <div className="grow">
          <TextFieldController
            ref={textareaRef}
            as="input"
            hookForm={hookForm}
            register={register('content', {
              required: true,
              pattern: {
                value: /^[\s\S]{0,150}$/,
                message: t('comment.commentLengthError'),
              },
            })}
            placeholder={
              commentType === 'comment'
                ? t('comment.placeholder_comment')
                : t('comment.placeholder_reply')
            }
            maxCount={150}
            className={cn('transition-all', {
              'h-60': watch('content')?.length === 0,
              '': watch('content')?.length > 0,
            })}
            onBlur={handleBlur}
          />
        </div>

        <button
          type="button"
          className="flex h-48 w-48 shrink-0 items-center justify-center rounded-full bg-primary"
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleSubmit(onSubmit)}
        >
          <Icon id="24-send" />
        </button>
      </form>
    </div>
  );
}
