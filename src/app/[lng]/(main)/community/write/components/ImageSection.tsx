import Image from 'next/image';
import { memo, useCallback } from 'react';
import { Control, useController } from 'react-hook-form';

import { WriteFormType } from '../type';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Loading } from '@/components/Loading';
import { useFileUpload } from '@/hooks/useFileUpload';

interface ImageSectionProps {
  control: Control<WriteFormType>;
}

export default function ImageSection({ control }: ImageSectionProps) {
  const {
    field: { value, onChange },
  } = useController({
    name: 'images',
    control,
  });

  const { handleFileUploadClick, isLoading } = useFileUpload((files) => {
    onChange([...value, ...files]);
  });

  const handleDeleteClick = useCallback(
    (imageUrl: string) => onChange(value.filter((v) => v !== imageUrl)),
    [onChange, value]
  );

  return (
    <section className="px-20 pb-8 pt-16">
      <Flex className="gap-8">
        {value.map((imageUrl, index) => (
          <ImageThumbnail key={imageUrl + index} imageUrl={imageUrl} onClick={handleDeleteClick} />
        ))}
        {isLoading && (
          <Flex
            direction="column"
            justify="center"
            align="center"
            className="h-96 w-96 rounded-8 bg-card-ui"
          >
            <Loading />
          </Flex>
        )}
        {value.length < 3 && !(isLoading && value.length === 2) && (
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
      <Icon id="48-add_photo" width={48} height={48} />
      <p className="text-caption text-sign-caption">{imageCount}/3</p>
    </Flex>
  );
}

interface ImageThumbnailProps {
  imageUrl: string;
  onClick: (imageUrl: string) => void;
}

const ImageThumbnail = memo(({ imageUrl, onClick }: ImageThumbnailProps) => {
  return (
    <div className="relative h-96 w-96">
      <Image src={imageUrl} alt="select-img" className="rounded-8 object-cover" fill />
      <Icon
        id="32-close"
        width={32}
        height={32}
        className="absolute right-0 top-0 cursor-pointer"
        onClick={() => onClick(imageUrl)}
      />
    </div>
  );
});
