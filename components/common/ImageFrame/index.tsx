import { usePostFiles } from '@/apis/common';
import { makeFileToBlob } from '@/utils/makeFileToBlob';
import clsx from 'clsx';
import Image from 'next/image';
import { ForwardedRef, forwardRef } from 'react';

import type { ImageType } from '@/types';

interface ImageFrameProps {
  setImage: (imageData: ImageType) => void;
  imageBlob: string;
  shape?: 'circle' | 'square';
}

export default forwardRef(function ImageFrame(
  { setImage, imageBlob, shape = 'circle' }: ImageFrameProps,
  imgRef: ForwardedRef<HTMLInputElement>
) {
  const { mutate: mutatePostFiles } = usePostFiles();

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const imageFile = e.target.files?.[0];
    if (imageFile === undefined) return;
    formData.append('fileList', imageFile);
    mutatePostFiles(formData);

    const imageBlob = makeFileToBlob(imageFile);
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
});
