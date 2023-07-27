'use client';

import 'swiper/css';
import 'swiper/css/free-mode';

import { GenderType } from '@/types';
import clsx from 'clsx';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface PickerProps {
  selectList: string[] | number[];
  setValue: (value: string | number | GenderType) => void;

  isFirst?: boolean;
  isLast?: boolean;
}

export default function SwipePicker({
  selectList,
  setValue,

  isFirst = false,
  isLast = false,
}: PickerProps) {
  return (
    <Swiper
      mousewheel
      slideToClickedSlide
      centeredSlides
      className="w-full"
      direction={'vertical'}
      slidesPerView={3}
      modules={[FreeMode]}
      pagination={{
        clickable: true,
      }}
      freeMode={{
        enabled: true,
        sticky: true,
      }}
      onSlideChange={(swiper) => setValue(selectList[swiper.activeIndex])}
    >
      {selectList.map((slideContent) => (
        <SwiperSlide key={slideContent}>
          {({ isActive }) =>
            isActive ? (
              <div
                className={clsx(
                  {
                    'rounded-l-10': isFirst,
                    'rounded-r-10': isLast,
                  },
                  'flex h-full items-center justify-center bg-[#f8f8f8] text-25 font-700 text-gray'
                )}
              >
                {slideContent}
              </div>
            ) : (
              <div className="font-500 flex h-full items-center justify-center text-17 text-gray3">
                {slideContent}
              </div>
            )
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
