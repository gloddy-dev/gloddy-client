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
      blurDataURL={
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
      }
      placeholder="blur"
    />
  );
}
