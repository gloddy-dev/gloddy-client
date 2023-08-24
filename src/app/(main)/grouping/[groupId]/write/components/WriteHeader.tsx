'use client';
import { useWriteContext } from '../WriteContext';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import { Flex } from '@/components/Layout';
import { ImageType } from '@/types';
import { makeFileToBlob } from '@/utils/makeFileToBlob';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function WriteHeader() {
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
    <Header className="px-4">
      <Header.Left>
        <Flex align="center">
          <IconButton size="large">
            <Image src="/icons/24/arrow_back.svg" alt="arrow_back" width={24} height={24} />
          </IconButton>
          <p className="text-subtitle-1">게시글 작성</p>
        </Flex>
      </Header.Left>
    </Header>
  );
}
