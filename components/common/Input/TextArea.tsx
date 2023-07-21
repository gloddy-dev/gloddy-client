'use client';

import cn from '@/utils/cn';
import { type TextareaHTMLAttributes, forwardRef } from 'react';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  className?: string;
}

function TextArea(
  { placeholder, className, ...props }: TextAreaProps,
  ref: React.Ref<HTMLTextAreaElement>
) {
  return (
    <textarea
      ref={ref}
      placeholder={placeholder}
      className={cn(
        'font-500 h-112 w-full resize-none rounded-lg bg-gray5 p-10 px-23 py-14 text-16 text-black outline-none placeholder:text-gray3',
        className
      )}
      {...props}
    />
  );
}

export default forwardRef(TextArea);
