import cn from '@/utils/cn';
import Image from 'next/image';

interface BadgeProps {
  text?: string;
  className?: string;
}
export default function Badge({ text, className }: BadgeProps) {
  return (
    <div className={cn('flex h-22 w-45 py-2', className)}>
      <Image src="/icons/16/group.svg" width={16} height={16} alt="group" />
      {text}
    </div>
  );
}
