'use client';
import { Flex } from '../Layout';
import cn from '@/utils/cn';

interface LoadingProps {
  className?: string;
}

const loadingIconStyle = 'h-10 w-10 rounded-full bg-primary';

export default function Loading({ className }: LoadingProps) {
  return (
    <Flex justify="center" align="center" className={cn('h-full gap-10 ', className)}>
      <div className={cn(loadingIconStyle, 'animate-sizeUpAndDown1')} />
      <div className={cn(loadingIconStyle, 'animate-sizeUpAndDown2')} />
      <div className={cn(loadingIconStyle, 'animate-sizeUpAndDown3')} />
      <div className={cn(loadingIconStyle, 'animate-sizeUpAndDown4')} />
    </Flex>
  );
}
