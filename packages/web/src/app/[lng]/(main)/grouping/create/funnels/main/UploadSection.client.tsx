'use client';
import Image from 'next/image';
import { memo } from 'react';
import { Control, useController } from 'react-hook-form';

import type { CreateGroupContextValue } from '../../type';

import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { Loading } from '@/components/Loading';
import { useFileUpload } from '@/hooks/useFileUpload';

interface ImageThumbnailProps {
  control: Control<CreateGroupContextValue>;
}

export default function UploadSection({ control }: ImageThumbnailProps) {
  const { field } = useController({
    name: 'imageUrl',
    control,
  });

  const { handleFileUploadClick, previewImage, isPending } = useFileUpload(async (files) => {
    field.onChange(files[0]);
  });

  return (
    <Flex
      justify="center"
      align="center"
      className="rounded-8 bg-sub relative mx-20 aspect-[8/5] overflow-hidden"
      onClick={handleFileUploadClick}
    >
      <RenderImage previewImage={previewImage} isPending={isPending} />
    </Flex>
  );
}

interface RenderImageProps {
  previewImage: string | undefined;
  isPending: boolean;
}

const RenderImage = memo(function ({ previewImage, isPending }: RenderImageProps) {
  if (isPending) {
    return <Loading />;
  }

  if (previewImage) {
    return <Image src={previewImage} alt="group_image" className="object-cover" fill />;
  }

  return <Icon id="48-add_photo_white" width={48} height={48} />;
});
