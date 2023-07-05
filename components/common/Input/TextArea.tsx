'use client';

import { TextareaHTMLAttributes } from 'react';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
}

export default function TextArea({ placeholder, ...rest }: InputProps) {
  return (
    <textarea
      placeholder={placeholder}
      className="font-500 h-112 w-full resize-none rounded-lg bg-gray5 px-23 py-14 text-16 text-black outline-none"
      {...rest}
    />
  );
}
