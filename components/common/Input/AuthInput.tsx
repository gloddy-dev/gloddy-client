'use client';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  text?: string;
}

export default function AuthInput({ text, placeholder, ...rest }: InputProps) {
  return (
    <div className="relative flex bg-[#f6f6f6] w-full h-52 rounded-lg">
      <p className="text-gray2 flex items-center justify-center pl-24 pr-8">{text}</p>
      <input
        placeholder={placeholder}
        className="bg-[#f6f6f6] text-black outline-none"
        {...rest}
        type="text"
      />
    </div>
  );
}
