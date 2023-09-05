'use client';
import { useCreateGroupContext } from '../../components/CreateGroupContext';
import { Icon } from '@/components/Icon';
import { Flex } from '@/components/Layout';
import { useFileUpload } from '@/hooks/useFileUpload';
import Image from 'next/image';

export default function UploadSection() {
  const { watch, setValue } = useCreateGroupContext();

  const { handleFileUploadClick } = useFileUpload((files) => {
    setValue('imageUrl', files[0]);
  });

  return (
    <Flex
      justify="center"
      align="center"
      className="relative mx-20 aspect-[8/5] overflow-hidden rounded-8 bg-sub"
      onClick={handleFileUploadClick}
    >
      {!!watch('imageUrl') ? (
        <Image src={watch('imageUrl')} alt="group_image" className="object-cover" fill />
      ) : (
        <div className="relative h-48 w-48">
          <Icon id="48-add_photo_white" />
        </div>
      )}
    </Flex>
  );
}
