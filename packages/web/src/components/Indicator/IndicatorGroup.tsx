import { Flex } from '../Layout';
import cn from '@/utils/cn';

interface IndicatorGroupProps {
  totalStep: number;
  currentStep: number;
}
export default function IndicatorGroup({ totalStep, currentStep }: IndicatorGroupProps) {
  return (
    <Flex className="gap-8">
      {Array(totalStep)
        .fill(0)
        .map((_, index) => {
          return <Indicator isFocus={index + 1 === currentStep} key={index} />;
        })}
    </Flex>
  );
}
interface IndicatorProps {
  isFocus: boolean;
}
export function Indicator({ isFocus }: IndicatorProps) {
  return (
    <div
      className={cn('h-8 rounded-full', {
        'w-24 bg-sign-caption': isFocus,
        'w-8 bg-sign-brand': !isFocus,
      })}
    />
  );
}
