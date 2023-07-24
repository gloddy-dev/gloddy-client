'use client';
import ImageFrame from '@/components/common/ImageFrame';
import useJoinStore from '@/store/useJoinStore';

import type { ImageType } from '@/types';

export default function ImageFrameSection() {
  const { profileImage, setJoinValue } = useJoinStore();

  return (
    <ImageFrame
      setImage={(value: ImageType) => setJoinValue({ profileImage: value })}
      imageBlob={profileImage.imageBlob}
    />
  );
}
