import { Spacing } from '../common/Spacing';
import { StrictPropsWithChildren } from '@/types';
import Image from 'next/image';

interface TextListProps {
  /**
   * 텍스트의 유형을 설정합니다. (default: info)
   */
  variant?: 'info' | 'info-icon' | 'caption' | 'subtitle' | 'grade';
}

export default function TextList({ children }: StrictPropsWithChildren<TextListProps>) {
  return (
    <div className="flex">
      <Image src="/icons/16/info.svg" width={20} height={20} alt="info" />
      <Spacing size={4} direction="horizontal" />
      <p className="text-caption">{children}</p>
    </div>
  );
}
