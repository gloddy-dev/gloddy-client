import { Input } from '@/components/common/Input';
import { Spacing } from '@/components/common/Spacing';

import type { InputHTMLAttributes } from 'react';

interface InputAreaProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  onClick: () => void;
}

export default function InputArea({ title, onClick, ...props }: InputAreaProps) {
  return (
    <section onClick={onClick}>
      <p className="text-14">{title}</p>
      <Spacing size={10} />
      <Input readOnly {...props} />
      <Spacing size={15} />
    </section>
  );
}
