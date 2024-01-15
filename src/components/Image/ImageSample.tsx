import { sampleBlob64 } from '@/constants/sampleBlob64';
import Image from 'next/image';

interface ImageSampleProps {
  width: number;
  height: number;
}
export default function ImageSample({ width, height }: ImageSampleProps) {
  return (
    <Image
      src="/images/approve_character.png"
      width={width}
      height={height}
      alt="sample"
      blurDataURL={sampleBlob64}
      placeholder="blur"
    />
  );
}
