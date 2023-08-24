import { Flex } from '@/components/Layout';
import { useFileUpload } from '@/hooks/useFileUpload';
import { makeFileToBlob } from '@/utils/makeFileToBlob';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ImageSection() {
  const [images, setImages] = useState<File[]>([]);
  const { handleFileUpload } = useFileUpload(
    (files) => {
      setImages((prev) => [...prev, ...files]);
    },
    { multiple: true }
  );

  return (
    <section className="pb-8 pt-16">
      <Flex className="gap-8">
        {images.map((imageBlob) => {
          const imageUrl = makeFileToBlob(imageBlob);
          return (
            <ImageThumbnail
              key={imageUrl}
              imageUrl={imageUrl}
              onClick={() => setImages((prev) => prev.filter((image) => image !== imageBlob))}
            />
          );
        })}
        {images.length < 3 && (
          <AddImageButton imageCount={images.length} onClick={handleFileUpload} />
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
  imageUrl: string;
  onClick: () => void;
}

function ImageThumbnail({ imageUrl, onClick }: ImageThumbnailProps) {
  return (
    <div className="relative h-96 w-96">
      <Image src={imageUrl} alt="select-img" className="rounded-8 object-cover" fill />
      <Image
        src="/icons/32/close.svg"
        alt="delete_image"
        width={32}
        height={32}
        className="absolute right-0 top-0 cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
}
