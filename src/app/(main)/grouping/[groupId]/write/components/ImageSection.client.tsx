import { Flex } from '@/components/Layout';
import { useFileUpload } from '@/hooks/useFileUpload';
import { makeFileToBlob } from '@/utils/makeFileToBlob';
import Image from 'next/image';
import { memo, useCallback } from 'react';
import { Control, useController } from 'react-hook-form';

import type { WriteFormValues } from '../type';

interface ImageSectionProps {
  control: Control<WriteFormValues>;
}

export default function ImageSection({ control }: ImageSectionProps) {
  const {
    field: { value, onChange },
  } = useController({
    name: 'images',
    control,
  });

  const { handleFileUploadClick } = useFileUpload((files) => onChange([...value, ...files]), {
    multiple: true,
  });

  const handleDeleteClick = useCallback(
    (imageBlob: File) => onChange(value.filter((blob) => blob !== imageBlob)),
    [onChange, value]
  );

  return (
    <section className="pb-8 pt-16">
      <Flex className="gap-8">
        {value.map((imageBlob, index) => {
          return (
            <ImageThumbnail
              key={imageBlob.name + index}
              imageBlob={imageBlob}
              onClick={handleDeleteClick}
            />
          );
        })}
        {value.length < 3 && (
          <AddImageButton imageCount={value.length} onClick={handleFileUploadClick} />
        )}
      </Flex>
    </section>
  );
}

interface AddImageSectionProps {
  imageCount: number;
  onClick: () => void;
}

function AddImageButton({ imageCount, onClick }: AddImageSectionProps) {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      className="h-96 w-96 cursor-pointer rounded-8 bg-sub"
      onClick={onClick}
    >
      <Image src="/icons/48/add_photo.svg" alt="add_photo" width={48} height={48} />
      <p className="text-caption text-sign-caption">{imageCount}/3</p>
    </Flex>
  );
}

interface ImageThumbnailProps {
  imageBlob: File;
  onClick: (imageBlob: File) => void;
}

const ImageThumbnail = memo(({ imageBlob, onClick }: ImageThumbnailProps) => {
  const imageUrl = makeFileToBlob(imageBlob);

  return (
    <div className="relative h-96 w-96">
      <Image src={imageUrl} alt="select-img" className="rounded-8 object-cover" fill />
      <Image
        src="/icons/32/close.svg"
        alt="delete_image"
        width={32}
        height={32}
        className="absolute right-0 top-0 cursor-pointer"
        onClick={() => onClick(imageBlob)}
      />
    </div>
  );
});