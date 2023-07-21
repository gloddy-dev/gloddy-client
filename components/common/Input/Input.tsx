'use client';
import { Spacing } from '../Spacing';
import cn from '@/utils/cn';

import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
}

export default function Input({ label, placeholder, type = 'text', className, ...props }: InputProps) {
  return (
    <div className="relative flex h-52 w-full rounded-lg bg-[#f6f6f6]">
      <Spacing size={24} direction="horizontal" />
      {label && <p className="flex shrink-0 items-center text-gray2">{label}</p>}
      <input
        placeholder={placeholder}
        className={cn(
          'flex h-full grow rounded-lg border-none bg-[#f6f6f6] pr-5 text-16 outline-none placeholder:text-gray3',
          { 'indent-8': label, 'indent-10': !label },
          className
        )}
        type={type}
        {...props}
      />
    </div>
  );
}
