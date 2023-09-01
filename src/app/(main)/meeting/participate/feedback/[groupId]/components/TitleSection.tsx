import { Spacing } from '@/components/common/Spacing';

interface TitleSectionProps {
  message: string;
  step: number;
}
export default function TitleSection({ message, step }: TitleSectionProps) {
  return (
    <div className="px-20">
      <Spacing size={32} />
      닷닷닷
      <Spacing size={12} />
      <h3 className="text-h3">{message}</h3>
      <Spacing size={20} />
    </div>
  );
}
