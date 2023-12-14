import getBase64 from '@/utils/getBase64';
import Image, { type ImageProps } from 'next/image';

const BlurImage = async ({ src, ...props }: ImageProps & { src: string }) => {
  const base64 = await getBase64(src);

  return <Image {...props} alt={props.alt || ''} src={src} placeholder={base64} />;
};

export default BlurImage;
