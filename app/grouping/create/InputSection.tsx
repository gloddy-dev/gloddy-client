import { Input } from '@/components/common/Input';
import Spacing from '@/components/common/Spacing';

interface InputSectionProps {
  title: string;
  message: string;
  onClick: () => void;
}

export default function InputSection({ title, message, onClick }: InputSectionProps) {
  return (
    <section onClick={onClick}>
      <p className="text-14">{title}</p>
      <Spacing size={5} />
      <Input readOnly className="text-gray3 outline-none" onClick={onClick} value={message} />
    </section>
  );
}
