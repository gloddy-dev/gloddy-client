'use client';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export default function Input({ placeholder, ...rest }: InputProps) {
  return (
    <input
      placeholder={placeholder}
      className="bg-[#f5f5f5] text-black outline-none text-16 font-500 pl-23 w-full rounded-lg h-50"
      {...rest}
      type="text"
    />
  );
}
