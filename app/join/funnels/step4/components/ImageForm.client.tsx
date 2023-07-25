'use client';
import { useJoinContext } from '../../JoinContext';
import ImageFrame from '@/components/common/ImageFrame';

export default function ImageForm() {
  const { setValue } = useJoinContext();
  const setImageFile = (imageFile: File) => setValue('imageFile', imageFile);

  return <ImageFrame setImageFile={setImageFile} />;
}
