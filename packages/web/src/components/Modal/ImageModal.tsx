'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import ModalWrapper from './ModalWrapper';
import { Flex } from '../Layout';
import { Spacing } from '../Spacing';

const Glider = dynamic(
  () =>
    import('react-glider').then((mod) => {
      require('glider-js/glider.min.css');
      return mod;
    }),
  { ssr: false }
);

interface ImageModalProps {
  images: string[];
  currentImage: string;
  onClose: () => void;
}

export default function ImageModal({ images, currentImage, onClose }: ImageModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(images.indexOf(currentImage));

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSlideChange = (event: any) => {
    const newSlideIndex = event.detail.slide;
    setCurrentImageIndex(newSlideIndex);
  };

  return (
    <ModalWrapper onClose={onClose} className="w-full px-[5%]">
      <Glider
        draggable
        slidesToShow={1}
        slidesToScroll={1}
        scrollLock
        onSlideVisible={handleSlideChange}
      >
        {images.map((image, index) => (
          <div key={index} className={'relative w-full before:block before:pb-[100%]'}>
            <Image src={image} alt={`img-${index}`} sizes={'384px'} fill />
          </div>
        ))}
      </Glider>
      <Spacing size={12} />
      <Flex justify="center">
        <span className="rounded-20 text-caption text-sign-sub bg-white px-6 py-2">
          {currentImageIndex + 1}/{images.length}
        </span>
      </Flex>
    </ModalWrapper>
  );
}
