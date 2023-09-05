'use client';

import 'swiper/css';
import 'swiper/css/free-mode';

import clsx from 'clsx';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { StrictPropsWithChildren } from '@/types';

interface PickerProps<T extends string | number> {
  selectList: T[];
  value: T;
  setValue: (value: T) => void;
}

export default function SwipePicker<T extends string | number>({
  selectList,
  value,
  setValue,
}: PickerProps<T>) {
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
      initialSlide={selectList.indexOf(value)}
    >
      {selectList.map((slideContent) => (
        <SwiperSlide key={slideContent}>
          {({ isActive }) => (
            <div
              className={clsx('flex h-full items-center justify-center', {
                'font-700 text-25 text-gray': isActive,
                'font-500 text-17 text-gray3': !isActive,
              })}
            >
              {typeof slideContent === 'number' && slideContent >= 0 && slideContent < 10
                ? '0' + slideContent
                : slideContent}
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function Bar() {
  return <div className="absolute inset-y-0 my-auto h-60 w-full rounded-8 bg-[#f8f8f8]" />;
}

function MiddleText({ children }: StrictPropsWithChildren) {
  return (
    <div className="font-700 z-10 flex grow items-center whitespace-nowrap text-20 text-gray">
      {children}
    </div>
  );
}

SwipePicker.Bar = Bar;
SwipePicker.MiddleText = MiddleText;
