'use client';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  text: string;
}

export default function AuthInput({ text, placeholder, ...rest }: InputProps) {
  return (
    <div className="relative flex bg-[#f6f6f6] w-full h-52 rounded-lg">
      <p className="text-gray2 w-40 flex items-center justify-center">{text}</p>
      <input
        placeholder={placeholder}
        className="bg-[#f6f6f6] text-black outline-none"
        {...rest}
        type="text"
      />
    </div>
  );
}
