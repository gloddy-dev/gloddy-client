import getBase64 from '@/utils/getBase64';
import Image from 'next/image';

interface ImageWithPlaceholderProps {
  src: string;
}

export default async function ImageWithPlaceholder({ src }: ImageWithPlaceholderProps) {
  const { base64, img } = await getBase64(src);

  return (
    <Image
      src={src}
      alt={src}
      width={img.width}
      height={img.height}
      sizes="65vw"
      style={{ height: 'auto' }}
      placeholder="blur"
      blurDataURL={base64}
    />
  );
}
