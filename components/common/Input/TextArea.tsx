'use client';

import type { TextareaHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  register?: UseFormRegisterReturn;
}

export default function TextArea({ placeholder, register, ...props }: TextAreaProps) {
  return (
    <textarea
      placeholder={placeholder}
      className="font-500 h-112 w-full resize-none rounded-lg bg-gray5 p-10 px-23 py-14 text-16 text-black outline-none placeholder:text-gray3"
      {...register}
      {...props}
    />
  );
}
