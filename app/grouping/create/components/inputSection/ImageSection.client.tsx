import ImageFrame from '@/components/common/ImageFrame';
import { ImageType } from '@/types';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';

export default function ImageSection() {
  const imgRef = useRef<HTMLInputElement>(null);
  const { setValue, watch } = useFormContext();

  return (
    <ImageFrame
      setImage={(value: ImageType) => setValue('image', value)}
      imageBlob={watch('image')?.imageBlob}
      shape="square"
      ref={imgRef}
    />
  );
}
