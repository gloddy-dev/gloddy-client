'use client';

import { TextareaHTMLAttributes } from 'react';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
}

export default function TextArea({ placeholder, ...rest }: InputProps) {
  return (
    <textarea
      placeholder={placeholder}
      className="bg-[#f5f5f5] text-black outline-none text-16 font-500 pl-23 w-full rounded-lg h-112 resize-none"
      {...rest}
    />
  );
}
