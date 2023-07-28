'use client';
import { useCreateGroupContext } from '../CreateGroupContext';
import ImageFrame from '@/components/common/ImageFrame';
import { useRef } from 'react';

export default function ImageSection() {
  const imgRef = useRef<HTMLInputElement>(null);
  const { setValue } = useCreateGroupContext();

  return (
    <ImageFrame
      setImageUrl={(value: string) => setValue('fileUrl', value)}
      shape="square"
      ref={imgRef}
    />
  );
}
