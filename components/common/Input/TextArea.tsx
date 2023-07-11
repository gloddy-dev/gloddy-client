'use client';

import { TextareaHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  register?: UseFormRegisterReturn;
}

export default function TextArea({ placeholder, register, ...rest }: InputProps) {
  return (
    <textarea
      placeholder={placeholder}
      className="font-500 h-112 w-full resize-none rounded-lg bg-gray5 p-10 px-23 py-14 text-16 text-black outline-none"
      {...register}
      {...rest}
    />
  );
}
