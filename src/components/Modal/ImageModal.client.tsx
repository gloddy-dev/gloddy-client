'use client';
import ModalWrapper from './ModalWrapper.client';
import { Flex } from '../Layout';
import { Spacing } from '../Spacing';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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

  return (
    <ModalWrapper onClose={onClose} className="w-full">
      <Swiper
        slidesPerView={1}
        initialSlide={currentImageIndex}
        onSlideChange={(swiper) => setCurrentImageIndex(swiper.activeIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative w-full before:block before:pb-[100%]">
            <Image src={image} alt="fullImage" className="object-cover" fill />
          </SwiperSlide>
        ))}
        <Spacing size={12} />
        <Flex justify="center">
          <span className="rounded-20 bg-white px-6 py-2 text-caption text-sign-sub">
            {currentImageIndex + 1}/{images.length}
          </span>
        </Flex>
      </Swiper>
    </ModalWrapper>
  );
}
