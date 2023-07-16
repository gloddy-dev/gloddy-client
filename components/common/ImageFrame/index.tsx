import clsx from 'clsx';
import Image from 'next/image';

import { makeFileToBlob } from '@/utils/makeFileToBlob';

import type { ImageType } from '@/types';


interface ImageFrameProps {
  setImage: (imageData: ImageType) => void;
  imgRef: React.RefObject<HTMLInputElement>;
  imageBlob: string;
  shape?: 'circle' | 'square';
}

export default function ImageFrame({
  setImage,
  imgRef,
  imageBlob,
  shape = 'circle',
}: ImageFrameProps) {
  const handleImageInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];
    if (imageFile === undefined) return;
    const imageBlob = await makeFileToBlob(imageFile);
    setImage({ imageFile, imageBlob });
  };
  return (
    <section className="relative flex h-160 items-center justify-center">
      <label className="relative h-100 w-100" htmlFor="image">
        {imageBlob ? (
          <Image
            alt="frameImage"
            src={imageBlob}
            priority
            fill
            className={clsx('h-full w-full object-cover', {
              'rounded-full': shape === 'circle',
              'rounded-xl': shape === 'square',
            })}
          />
        ) : (
          <div
            className={clsx('h-100 w-100 bg-gray5', {
              'rounded-full': shape === 'circle',
              'rounded-xl': shape === 'square',
            })}
          />
        )}

        <Image
          alt="plus"
          src="/assets/plus.svg"
          width={20}
          height={30}
          className={clsx('absolute ', {
            'bottom-5 right-5': shape === 'circle',
            '-right-5 -top-5': shape === 'square',
          })}
        />
      </label>

      <input
        className="hidden"
        type="file"
        accept="image/*"
        id="image"
        onChange={handleImageInput}
        ref={imgRef}
      />
    </section>
  );
}
