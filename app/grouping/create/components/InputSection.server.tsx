import { InputHTMLAttributes } from 'react';

import { Input } from '@/components/common/Input';
import Spacing from '@/components/common/Spacing';

interface InputSectionProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  onClick: () => void;
}

export default function InputSection({ title, onClick, ...rest }: InputSectionProps) {
  return (
    <section onClick={onClick}>
      <p className="text-14">{title}</p>
      <Spacing size={10} />
      <Input readOnly {...rest} />
      <Spacing size={15} />
    </section>
  );
}
