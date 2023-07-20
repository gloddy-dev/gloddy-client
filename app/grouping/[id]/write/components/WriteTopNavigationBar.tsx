'use client';
import { useWriteContext } from '../WriteContext';
import { TopNavigationBar } from '@/components/common/NavigationBar';
import { ImageType } from '@/types';
import { makeFileToBlob } from '@/utils/makeFileToBlob';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function WriteTopNavigationBar() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { setImages } = useWriteContext();
  const router = useRouter();

  const handleAddImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFiles = e.target.files;
    if (imageFiles === null) return;

    const imageList: ImageType[] = Array.from(imageFiles).map((imageFile) => {
      return { imageFile, imageBlob: makeFileToBlob(imageFile) };
    });

    setImages((prev) => [...prev, ...imageList]);
  };

  return (
    <TopNavigationBar
      text="게시글 작성"
      leftNode={
        <Image
          alt="back"
          src="/assets/arrow_back.svg"
          width={8}
          height={15}
          onClick={() => router.back()}
          className="cursor-pointer"
        />
      }
      rightNode={
        <>
          <Image
            src="/assets/image.svg"
            alt="add_image"
            width={24}
            height={24}
            onClick={() => inputFileRef.current?.click()}
            className="cursor-pointer"
          />
          <input
            ref={inputFileRef}
            type="file"
            onChange={handleAddImageChange}
            accept="image/*"
            multiple
            hidden
          />
        </>
      }
    />
  );
}
