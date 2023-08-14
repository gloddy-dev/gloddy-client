import { Spacing } from '../common/Spacing';
import { StrictPropsWithChildren } from '@/types';
import cn from '@/utils/cn';
import Image from 'next/image';

type VariantKeys = 'info' | 'caption' | 'subtitle' | 'grade';

type VariantAttributeType = Record<
  Partial<VariantKeys>,
  { prefix?: React.ReactNode; margin?: number; typography: string }
>;

interface TextListProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * 텍스트의 유형을 설정합니다. (default: info)
   */
  variant?: VariantKeys;
  className?: string;
}

const variantAttribute: VariantAttributeType = {
  info: {
    prefix: <Image src="/icons/4/dot.svg" width={4} height={4} alt="dot" />,
    margin: 8,
    typography: 'text-paragraph-2',
  },
  caption: {
    prefix: <Image src="/icons/16/info.svg" width={16} height={16} alt="info" />,
    margin: 4,
    typography: 'text-caption',
  },
  subtitle: {
    typography: 'text-subtitle-3',
  },
  grade: {
    typography: 'text-caption',
  },
};

export default function TextList({
  children,
  variant = 'info',
  className,
  ...props
}: StrictPropsWithChildren<TextListProps>) {
  return (
    <div className="flex items-start">
      <div className="flex h-24 items-center">{variantAttribute[variant].prefix}</div>
      <Spacing size={variantAttribute[variant].margin || 0} direction="horizontal" />
      <p
        className={cn(
          variantAttribute[variant].typography,
          'flex flex-col justify-center',
          className
        )}
        {...props}
      >
        {children}
      </p>
    </div>
  );
}
