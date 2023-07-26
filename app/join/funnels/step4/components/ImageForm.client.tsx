'use client';
import { useJoinContext } from '../../../components/JoinContext';
import ImageFrame from '@/components/common/ImageFrame';

export default function ImageForm() {
  const { setValue, watch } = useJoinContext();
  const setImageUrl = (imageUrl: string) => setValue('imageUrl', imageUrl);

  return <ImageFrame setImageUrl={setImageUrl} />;
}
