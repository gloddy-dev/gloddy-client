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
  isLoading?: boolean;
  /**
   * 아바타의 크기를 지정합니다. small: 40x40, medium: 56x56, large: 96x96 (기본값: medium)
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 우측 상단 아이콘에 대한 변수를 지정합니다. (기본값: none)
   */
  iconVariant?: 'none' | 'add' | 'draft_orders' | 'education';
  onClick?: () => void;
}
export default function Avatar({
  imageUrl,
  isLoading,
  size = 'medium',
  iconVariant = 'none',
  onClick,
  children,
}: PropsWithChildren<AvatarProps>) {
  return (
    <span
      className={cn('relative flex shrink-0 flex-col items-center gap-1 overflow-hidden', {
        'w-40': size === 'small',
        'w-56': size === 'medium',
        'w-96': size === 'large',
      })}
      onClick={onClick}
    >
      <div className="relative flex w-full before:block before:pb-[100%]">
        <AvatarImage imageUrl={imageUrl} isLoading={isLoading} />
        {iconVariant !== 'none' && (
          <Icon
            id={`32-${iconVariant}`}
            className={cn('absolute', {
              '-right-6 -top-6': size === 'small',
              '-right-2 -top-2': size === 'medium',
              '-right-1 -top-1': size === 'large',
            })}
            width={size === 'large' ? 32 : 24}
            height={size === 'large' ? 32 : 24}
          />
        )}
      </div>
      {children}
    </span>
  );
}

const AvatarImage = memo(function ({
  imageUrl,
  isLoading,
}: Pick<AvatarProps, 'imageUrl' | 'isLoading'>) {
  if (isLoading) {
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
