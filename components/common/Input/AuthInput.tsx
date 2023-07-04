'use client';
import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  text?: string;
  register?: UseFormRegisterReturn;
  type?: string;
}

export default function AuthInput({
  text,
  placeholder,
  register,
  type = 'text',
  ...rest
}: InputProps) {
  return (
    <div className="relative flex bg-[#f6f6f6] w-full h-52 rounded-lg">
      <p className="text-gray2 flex items-center justify-center pl-24 pr-8">{text}</p>
      <input
        placeholder={placeholder}
        className="bg-[#f6f6f6] text-black  flex-grow pr-5 border-none outline-none  rounded-lg"
        type={type}
        {...register}
        {...rest}
      />
    </div>
  );
}
