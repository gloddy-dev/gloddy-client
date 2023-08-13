import { Spacing } from '../common/Spacing';
import { StrictPropsWithChildren } from '@/types';
import Image from 'next/image';

type VariantKeys = 'info' | 'caption' | 'subtitle' | 'grade';

interface TextListProps {
  /**
   * 텍스트의 유형을 설정합니다. (default: info)
   */
  variant?: VariantKeys;
}

type VariantPrefix = Record<Partial<VariantKeys>, { prefix?: React.ReactNode; margin?: number }>;

const variantPrefix: VariantPrefix = {
  info: {
    prefix: <Image src="/icons/4/dot.svg" width={4} height={4} alt="dot" />,
    margin: 8,
  },
  caption: {
    prefix: <Image src="/icons/16/info.svg" width={16} height={16} alt="info" />,
    margin: 4,
  },
  subtitle: {},
  grade: {},
};

export default function TextList({
  children,
  variant = 'info',
}: StrictPropsWithChildren<TextListProps>) {
  return (
    <div className="flex">
      {variantPrefix[variant].prefix}
      <Spacing size={variantPrefix[variant].margin || 0} direction="horizontal" />
      <p className="text-caption">{children}</p>
    </div>
  );
}
