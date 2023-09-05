import { Spacing } from '../common/Spacing';
import { Icon } from '../Icon';
import { StrictPropsWithChildren } from '@/types';
import cn from '@/utils/cn';

type VariantKeys = 'info' | 'info-no-icon' | 'caption' | 'subtitle' | 'grade';

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
    prefix: <Icon id="4-dot" width={4} height={4} />,
    margin: 8,
    typography: 'text-paragraph-2 text-sign-secondary',
  },
  'info-no-icon': {
    margin: 12,
    typography: 'text-paragraph-2 text-sign-secondary',
  },
  caption: {
    prefix: <Icon id="16-info" width={16} height={16} />,
    margin: 4,
    typography: 'text-caption text-sign-tertiary',
  },
  subtitle: {
    typography: 'text-subtitle-3 text-sign-secondary',
  },
  grade: {
    prefix: <Icon id="16-gloddy" width={16} height={16} />,
    margin: 2,
    typography: 'text-caption text-sign-tertiary',
  },
};

export default function TextList({
  children,
  variant = 'info',
  className,
  ...props
}: StrictPropsWithChildren<TextListProps>) {
  return (
    <div className="flex items-center">
      <div className="flex h-24 items-center">{variantAttribute[variant].prefix}</div>
      <Spacing size={variantAttribute[variant].margin || 0} direction="horizontal" />
      <div className={cn(variantAttribute[variant].typography, className)} {...props}>
        {children}
      </div>
    </div>
  );
}
