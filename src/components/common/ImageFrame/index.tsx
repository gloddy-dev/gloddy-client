import { usePostFiles } from '@/apis/common';
import { makeFileToBlob } from '@/utils/makeFileToBlob';
import clsx from 'clsx';
import Image from 'next/image';
import { ForwardedRef, forwardRef, useState } from 'react';

interface ImageFrameProps {
  setImageUrl?: (imageFile: string) => void;
  defaultImageUrl?: string;
  canChange?: boolean;
  shape?: 'circle' | 'square';
}

export default forwardRef(function ImageFrame(
  { setImageUrl, defaultImageUrl, shape = 'circle', canChange = true }: ImageFrameProps,
  imgRef: ForwardedRef<HTMLInputElement>
) {
  const { mutate: mutatePostFiles } = usePostFiles();
  const [imageBlob, setImageBlob] = useState<string>(defaultImageUrl ?? '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!canChange || !setImageUrl) return;
    const imageFile = e.target.files?.[0];
    if (imageFile === undefined) return;
    mutatePostFiles(
      {
        fileList: [imageFile],
      },
      {
        onSuccess: (data) => {
          setImageUrl(data.fileUrlList[0]);
        },
      }
    );

    const imageBlob = makeFileToBlob(imageFile);
    setImageBlob(imageBlob);
  };

  return (
    <section className="flex h-160 items-center justify-center">
      <label className="relative h-100 w-100" htmlFor="image">
        {imageBlob ? (
          <Image
            alt="frameImage"
            src={imageBlob ?? defaultImageUrl}
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

        {canChange && (
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
        )}
      </label>

      <input
        className="hidden"
        type="file"
        accept="image/*"
        id="image"
        onChange={handleInputChange}
        ref={imgRef}
      />
    </section>
  );
});
