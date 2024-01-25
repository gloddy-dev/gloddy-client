'use client';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { useFileUpload } from '@/hooks/useFileUpload';
import Image from 'next/image';
import { memo } from 'react';
import { Control, useController } from 'react-hook-form';

import type { CreateGroupContextValue } from '../../type';

interface ImageThumbnailProps {
  control: Control<CreateGroupContextValue>;
}

export default function UploadSection({ control }: ImageThumbnailProps) {
  const { field } = useController({
    name: 'imageUrl',
    control,
  });

  const { handleFileUploadClick, previewImage } = useFileUpload(async (files) => {
    field.onChange(files[0]);
  });

  return (
    <Flex
      justify="center"
      align="center"
      className="relative mx-20 aspect-[8/5] overflow-hidden rounded-8 bg-sub"
      onClick={handleFileUploadClick}
    >
      <RenderImage previewImage={field.value} />
    </Flex>
  );
}

interface RenderImageProps {
  previewImage: string | undefined;
}

const RenderImage = memo(function ({ previewImage }: RenderImageProps) {
  if (previewImage) {
    return <Image src={previewImage} alt="group_image" className="object-cover" fill />;
  }

  return <Icon id="48-add_photo_white" width={48} height={48} />;
});
