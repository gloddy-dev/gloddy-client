'use client';
import { useCreateGroupContext } from '../CreateGroupContext';
import ImageFrame from '@/components/common/ImageFrame';
import { useRef, useState } from 'react';

import type { ImageType } from '@/types';

export default function ImageSection() {
  const [image, setImage] = useState<ImageType | null>(null);
  const imgRef = useRef<HTMLInputElement>(null);
  const { setValue, watch } = useCreateGroupContext();

  return (
    <ImageFrame
      setImage={(value: ImageType) => setImage(value)}
      imageBlob={image?.imageBlob ?? ''}
      shape="square"
      ref={imgRef}
    />
  );
}
