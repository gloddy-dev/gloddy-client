import { Spacing } from '@/components/Spacing';
import { IndicatorGroup } from '@/components/Indicator';

interface TitleSectionProps {
  message: string;
  step: number;
}
export default function TitleSection({ message, step }: TitleSectionProps) {
  return (
    <div className="px-20">
      <Spacing size={32} />
      <IndicatorGroup totalStep={3} currentStep={step} />
      <Spacing size={12} />
      <h3 className="text-h3">{message}</h3>
      <Spacing size={20} />
    </div>
  );
}
