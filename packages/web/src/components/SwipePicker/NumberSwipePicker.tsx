'use client';
import 'swiper/css';
import 'swiper/css/free-mode';

import clsx from 'clsx';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const SELECT_LIST = new Array(10).fill(0).map((_, index) => index + 1);

interface PickerProps {
  setNumberValue: (value: number) => void;
  numberValue: number;
}

export default function NumberSwipePicker({ numberValue, setNumberValue }: PickerProps) {
  return (
    <Swiper
      freeMode={{
        enabled: true,
        sticky: true,
      }}
      className="h-150 relative w-full bg-white"
      slidesPerView={5}
      spaceBetween={40}
      slideToClickedSlide
      centeredSlides
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode]}
      onSlideChange={(swiper) => {
        setNumberValue(SELECT_LIST[swiper.activeIndex]);
      }}
      initialSlide={SELECT_LIST.indexOf(numberValue)}
    >
      {SELECT_LIST.map((slideContent) => (
        <SwiperSlide key={slideContent} className="overflow-visible">
          {({ isActive, isPrev, isNext }) => (
            <div
              className={clsx({
                'font-700 text-66 text-black2 pt-10': isActive,
                'font-500 text-50 pt-30 text-gray3': isPrev || isNext,
                'font-500 text-35 pt-50 text-gray8': !isActive && !isPrev && !isNext,
              })}
            >
              {slideContent}
            </div>
          )}
        </SwiperSlide>
      ))}
      <div className="z-100 -bottom-55 h-134 w-134 rounded-200 bg-white4  absolute left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </Swiper>
  );
}
