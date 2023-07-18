import ImageFrame from '@/components/common/ImageFrame';
import useJoinStore from '@/store/useJoinStore';
import { useRef } from 'react';

import type { ImageType } from '@/types';

export default function ImageFrameSection() {
  const imgRef = useRef<HTMLInputElement>(null);
  const { profileImage, setJoinValue } = useJoinStore();
  return (
    <ImageFrame
      setImage={(value: ImageType) => setJoinValue({ profileImage: value })}
      imgRef={imgRef}
      imageBlob={profileImage.imageBlob}
    />
  );
}
