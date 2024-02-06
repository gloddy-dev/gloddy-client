'use client';

import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { usePostComment } from '@/apis/groups';
import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { TextFieldController } from '@/components/TextField';
import { useNumberParams } from '@/hooks/useNumberParams';
import cn from '@/utils/cn';

export type CommentFormType = {
  content: string;
};

export default function CommentForm() {
  const { t } = useTranslation('groupDetail');
  const { articleId, groupId } = useNumberParams<['articleId', 'groupId']>();
  const { mutate: mutateComment } = usePostComment(groupId, articleId);
  const hookForm = useForm<CommentFormType>({
    mode: 'onChange',
    defaultValues: {
      content: '',
    },
  });
  const textareaRef = useRef<HTMLInputElement>(null);

  const { handleSubmit, reset, watch, register } = hookForm;

  const onSubmit = ({ content }: CommentFormType) => {
    reset();
    mutateComment({ params: { articleId, groupId }, payload: { content } });
  };

  return (
    <div className="bottom-fixed bg-white">
      <form className="flex items-start gap-8">
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
            placeholder={t('comment.placeholder')}
            maxCount={150}
            className={cn('transition-all', {
              'h-60': watch('content')?.length === 0,
              '': watch('content')?.length > 0,
            })}
          />
        </div>

        <button
          type="button"
          className="bg-primary flex h-48 w-48 shrink-0 items-center justify-center rounded-full"
          onClick={handleSubmit(onSubmit)}
        >
          <Icon id="24-send" />
        </button>
      </form>
    </div>
  );
}
