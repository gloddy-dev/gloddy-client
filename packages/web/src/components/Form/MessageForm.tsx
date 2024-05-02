'use client';

import { useRef } from 'react';
import { FieldValues, UseFormRegister, UseFormWatch, useForm } from 'react-hook-form';

import { useTranslation } from '@/app/i18n/client';
// import PhotoIcon from '@/assets/svgs/24-poho';
import SendIcon from '@/assets/svgs/24-send.svg';
import { TextFieldController } from '@/components/TextField';
import cn from '@/utils/cn';

interface MessageFormProps {
  placeholder: string;
  watch: UseFormWatch<T>;
  register: UseFormRegister<T>;
  onSubmit: () => void;
  onBlur?: () => void;
  className?: string;
}

export default function MessageForm({
  placeholder,
  onBlur,
  register,
  className,
}: MessageFormProps) {
  const textareaRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bottom-fixed bg-white pt-8">
      <form className="flex items-start gap-8">
        <div className="grow">
          <TextFieldController
            ref={textareaRef}
            as="textarea"
            hookForm={hookForm}
            register={register}
            placeholder={placeholder}
            maxCount={150}
            className={className}
            rightCaption=""
            onBlur={onBlur}
          />
        </div>

        <button
          type="submit"
          className="bg-primary flex h-48 w-48 shrink-0 items-center justify-center rounded-full"
          onMouseDown={(e) => e.preventDefault()}
        >
          <SendIcon className={'text-white'} />
        </button>
      </form>
    </div>
  );
}
