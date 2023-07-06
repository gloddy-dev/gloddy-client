import clsx from 'clsx';
import Image from 'next/image';

import { ImageType } from '@/@types/global';
import { makeFileToBlob } from '@/utils/makeFileToBlob';

interface ImageFrameProps {
  setImage: (imageData: ImageType) => void;
  imgRef: React.RefObject<HTMLInputElement>;
  imageBlob: string;
  shape: 'circle' | 'square';
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
    console.log(imageFile, imageBlob);
    setImage({ imageFile, imageBlob });
  };

  return (
    <section className="relative flex h-160 items-center justify-center">
      <label className="relative h-100 w-100" htmlFor="profileImage">
        {imageBlob ? (
          <Image
            alt="profile"
            src={imageBlob}
            priority
            fill
            className={clsx('object-cover', {
              'rounded-full': shape === 'circle',
              'rounded-xl': shape === 'square',
            })}
          />
        ) : (
          <div className="h-100 w-100 rounded-full bg-gray5" />
        )}
        <Image
          alt="plus"
          src="/assets/plus.svg"
          width={20}
          height={30}
          className="absolute bottom-5 right-5"
        />
      </label>

      <input
        className="hidden"
        type="file"
        accept="image/*"
        id="profileImage"
        onChange={handleImageInput}
        ref={imgRef}
      />
    </section>
  );
}
