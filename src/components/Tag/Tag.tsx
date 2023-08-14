import cn from '@/utils/cn';

interface TagProps {
  variant?: 'solid' | 'outline';
  isSelected?: boolean;
  children: React.ReactNode;
}

export default function Tag({ children, variant = 'solid', isSelected = false }: TagProps) {
  return (
    <button
      // TODO: solid 디자인 추가 시 적용
      className={cn('rounded-80 px-16 py-8', {
        'border border-border-default bg-white text-sign-tertiary':
          variant === 'solid' && !isSelected,
        'border border-primary-dark bg-brand-color text-primary-dark':
          variant === 'outline' && isSelected,
      })}
    >
      {children}
    </button>
  );
}
