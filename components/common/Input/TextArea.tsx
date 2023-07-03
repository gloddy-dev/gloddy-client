'use client';

import { TextareaHTMLAttributes } from 'react';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
}

export default function TextArea({ placeholder, ...rest }: InputProps) {
  return (
    <textarea
      placeholder={placeholder}
      className="bg-gray5 text-black outline-none text-16 font-500 py-14 px-23 w-full rounded-lg h-112 resize-none"
      {...rest}
    />
  );
}
