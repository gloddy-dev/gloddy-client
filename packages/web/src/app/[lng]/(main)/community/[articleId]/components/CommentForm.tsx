'use client';

import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { useCommentContext } from './CommentProvider';

import {
  useCreateCommunityReply,
  useGetCommunityArticleDetail,
  usePostCreateComment,
} from '@/apis/community';
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
  const { commentType, commentId, setCommentType } = useCommentContext();
  const categoryId = useGetCommunityArticleDetail(articleId).data.data.article.category.id;
  const { mutate: mutateComment } = usePostCreateComment(articleId, categoryId);
  const { mutate: mutateReply } = useCreateCommunityReply(articleId);
  const hookForm = useForm<CreateCommentRequest>({
    mode: 'onChange',
    defaultValues: {
      content: '',
    },
  });
  const textareaRef = useRef<HTMLInputElement>(null);

  const { handleSubmit, reset, watch, register, setFocus } = hookForm;

  useEffect(() => {
    if (commentType === 'reply') {
      setFocus('content');
    }
  }, [commentType, setFocus]);

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
      <form className="flex items-start gap-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="grow">
          <TextFieldController
            ref={textareaRef}
            as="textarea"
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
          type="submit"
          className="bg-primary flex h-48 w-48 shrink-0 items-center justify-center rounded-full"
          onMouseDown={(e) => e.preventDefault()}
        >
          <Icon id="24-send" />
        </button>
      </form>
    </div>
  );
}
