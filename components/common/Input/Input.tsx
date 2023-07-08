'use client';
import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  type?: string;
  className?: string;
}

export default function Input({
  text,
  placeholder,
  register,
  type = 'text',
  className,
  ...rest
}: InputProps) {
  return (
    <div className="relative flex h-52 w-full rounded-lg bg-[#f6f6f6]">
      <p className="flex items-center justify-center pl-24 pr-8 text-gray2">{text}</p>
      <input
        placeholder={placeholder}
        className={clsx(
          'flex-grow rounded-lg border-none  bg-[#f6f6f6] pr-5 text-16 text-black  outline-none',
          className
        )}
        type={type}
        {...register}
        {...rest}
      />
    </div>
  );
}
