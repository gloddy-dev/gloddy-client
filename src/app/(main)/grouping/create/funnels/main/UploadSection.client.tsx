'use client';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Loading } from '@/components/Loading';
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

  const { handleFileUploadClick, isLoading } = useFileUpload((files) => {
    field.onChange(files[0]);
  });

  return (
    <Flex
      justify="center"
      align="center"
      className="relative mx-20 aspect-[8/5] overflow-hidden rounded-8 bg-sub"
      onClick={handleFileUploadClick}
    >
      <RenderImage isLoading={isLoading} imageUrl={field.value} />
    </Flex>
  );
}

interface RenderImageProps {
  isLoading: boolean;
  imageUrl: string;
}

const RenderImage = memo(function ({ isLoading, imageUrl }: RenderImageProps) {
  console.log('render');
  if (isLoading) {
    return <Loading />;
  }

  if (imageUrl) {
    return <Image src={imageUrl} alt="group_image" className="object-cover" fill />;
  }

  return <Icon id="48-add_photo_white" width={48} height={48} />;
});
