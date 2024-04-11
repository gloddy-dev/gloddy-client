'use client';

import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { useTranslation } from '@/app/i18n/client';
import { Icon } from '@/components/Icon';
import { TextFieldController } from '@/components/TextField';
import cn from '@/utils/cn';

export type CreateCommentRequest = {
  content: string;
};

export default function MessageForm() {
  const { t } = useTranslation('community');
  const textareaRef = useRef<HTMLInputElement>(null);
  const hookForm = useForm<CreateCommentRequest>({
    mode: 'onChange',
    defaultValues: {
      content: '',
    },
  });

  const { handleSubmit, reset, watch, register, setFocus } = hookForm;

  return (
    <div className="bottom-fixed bg-white pt-8">
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
            placeholder={t('comment.placeholder_comment')}
            maxCount={150}
            className={cn('transition-all', {
              'h-60': watch('content')?.length === 0,
              '': watch('content')?.length > 0,
            })}
            rightCaption=""
          />
        </div>

        <button
          type="submit"
          className="bg-primary flex h-48 w-48 shrink-0 items-center justify-center rounded-full"
          onMouseDown={(e) => e.preventDefault()}
        >
          <Icon id="24-send" className={'text-white'} />
        </button>
      </form>
    </div>
  );
}
