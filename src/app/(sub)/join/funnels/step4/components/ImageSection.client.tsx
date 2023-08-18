'use client';
import { useJoinContext } from '../../../components/JoinContext.client';
import ImageFrame from '@/components/common/ImageFrame';

export default function ImageSection() {
  const { setValue } = useJoinContext();
  const setImageUrl = (imageUrl: string) => setValue('imageUrl', imageUrl);

  return <ImageFrame setImageUrl={setImageUrl} />;
}
