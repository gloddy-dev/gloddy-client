import { useCreateMeetingContext } from '../CreateMeetingContext';
import ImageFrame from '@/components/common/ImageFrame';
import { useRef } from 'react';

import type { ImageType } from '@/types';

export default function ImageSection() {
  const imgRef = useRef<HTMLInputElement>(null);
  const { setValue, watch } = useCreateMeetingContext();

  return (
    <ImageFrame
      setImage={(value: ImageType) => setValue('image', value)}
      imageBlob={watch('image')?.imageBlob}
      shape="square"
      ref={imgRef}
    />
  );
}
