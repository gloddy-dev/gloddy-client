'use client';
import { Flex } from '@/components/Layout';
import { StrictPropsWithChildren } from '@/types';
import cn from '@/utils/cn';

const badgeColor: {
  [key in ArticleBadgeProps['type']]: string;
} = {
  daily: 'bg-warning-color border-warning text-warning',
  question: 'bg-brand-color border-sign-brand text-sign-brand',
  language: 'bg-sub border-sign-tertiary text-sign-tertiary',
} as const;

interface ArticleBadgeProps {
  type: 'daily' | 'question' | 'language';
}

export default function ArticleBadge({
  type,
  children,
}: StrictPropsWithChildren<ArticleBadgeProps>) {
  return (
    <Flex
      justify="center"
      align="center"
      className={cn('rounded-24 border px-8 py-2 text-caption', badgeColor[type])}
    >
      {children}
    </Flex>
  );
}
