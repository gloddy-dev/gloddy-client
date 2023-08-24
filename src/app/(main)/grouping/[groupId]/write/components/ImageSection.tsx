import { Flex } from '@/components/Layout';
import Image from 'next/image';

const images = ['/images/dummy_image.png', '/images/dummy_image.png', '/images/dummy_image.png'];

export default function ImageSection() {
  return (
    <section className="pb-8 pt-16">
      <Flex className="gap-8">
        {images.map((imageBlob) => (
          <ImageThumbnail key={imageBlob} imageBlob={imageBlob} />
        ))}
        {images.length < 3 && <AddImageButton imageCount={0} />}
      </Flex>
    </section>
  );
}

interface AddImageSectionProps {
  imageCount: number;
}

function AddImageButton({ imageCount }: AddImageSectionProps) {
  return (
    <Flex direction="column" justify="center" align="center" className="h-96 w-96 rounded-8 bg-sub">
      <Image src="/icons/48/add_photo.svg" alt="add_photo" width={48} height={48} />
      <p className="text-caption text-sign-caption">{imageCount}/3</p>
    </Flex>
  );
}

interface ImageThumbnailProps {
  imageBlob: string;
}

function ImageThumbnail({ imageBlob }: ImageThumbnailProps) {
  return (
    <div className="relative grow before:block before:pb-[100%]">
      <Image src={imageBlob} alt="select-img" className="rounded-8 object-cover" fill />
      <Image
        src="/icons/32/close.svg"
        alt="delete_image"
        width={32}
        height={32}
        className="absolute right-0 top-0"
      />
    </div>
  );
}
