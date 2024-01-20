import { Icon } from '../Icon';
import { Flex } from '../Layout';
import { Loading } from '../Loading';
import cn from '@/utils/cn';
import Image from 'next/image';
import { type PropsWithChildren, memo } from 'react';

interface AvatarProps {
  /**
   * 아바타의 이미지 URL을 지정합니다. (필수)
   */
  imageUrl: string;
  isPending?: boolean;
  /**
   * 아바타의 크기를 지정합니다. small: 40x40, medium: 56x56, large: 96x96 (기본값: medium)
   */
  size?: 'x-small' | 'small' | 'medium' | 'large';
  /**
   * 우측 상단 아이콘에 대한 변수를 지정합니다. (기본값: none)
   */
  iconVariant?: 'none' | 'add' | 'draft_orders' | 'education';
  className?: string;
  onClick?: () => void;
}
export default function Avatar({
  imageUrl,
  isPending,
  size = 'medium',
  iconVariant = 'none',
  className,
  onClick,
  children,
}: PropsWithChildren<AvatarProps>) {
  return (
    <span
      className={cn(
        'relative flex shrink-0 flex-col items-center gap-1',
        {
          'w-28': size === 'x-small',
          'w-40': size === 'small',
          'w-56': size === 'medium',
          'w-96': size === 'large',
        },
        className
      )}
      onClick={onClick}
    >
      <div className="relative flex w-full before:block before:pb-[100%]">
        <AvatarImage imageUrl={imageUrl} isPending={isPending} />
        {iconVariant !== 'none' && (
          <Icon
            id={`32-${iconVariant}`}
            className={cn('absolute', {
              '-right-4 -top-4': size === 'x-small',
              '-right-6 -top-6': size === 'small',
              '-right-2 -top-2': size === 'medium',
              '-right-1 -top-1': size === 'large',
            })}
            width={cn({
              16: size === 'x-small',
              24: size === 'medium' || size === 'small',
              32: size === 'large',
            })}
            height={cn({
              16: size === 'x-small',
              24: size === 'medium' || size === 'small',
              32: size === 'large',
            })}
          />
        )}
      </div>
      {children}
    </span>
  );
}

const AvatarImage = memo(function ({
  imageUrl,
  isPending,
}: Pick<AvatarProps, 'imageUrl' | 'isPending'>) {
  if (isPending) {
    return (
      <Flex direction="column" justify="center" align="center" className="h-full w-full">
        <Loading />
      </Flex>
    );
  }

  if (imageUrl) {
    return <Image src={imageUrl} alt="avatar" className="rounded-full object-cover" fill />;
  }

  return <div className="h-full w-full cursor-pointer rounded-full bg-sub" />;
});
