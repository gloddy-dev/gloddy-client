'use client';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export default function Input({ placeholder, ...rest }: InputProps) {
  return (
    <input
      placeholder={placeholder}
      className="font-500 h-50 w-full rounded-lg bg-gray5 pl-23 text-16 text-black outline-none"
      {...rest}
      type="text"
    />
  );
}
