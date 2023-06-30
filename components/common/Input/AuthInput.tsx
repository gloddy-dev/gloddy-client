'use client';
import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  text?: string;
  register?: UseFormRegisterReturn;
}

export default function AuthInput({ text, placeholder, register, ...rest }: InputProps) {
  return (
    <div className="relative flex bg-[#f6f6f6] w-full h-52 rounded-lg">
      <p className="text-gray2 flex items-center justify-center pl-24 pr-8">{text}</p>
      <input
        placeholder={placeholder}
        className="bg-[#f6f6f6] text-black outline-none  flex-grow pr-5"
        {...register}
        {...rest}
        type="text"
      />
    </div>
  );
}
