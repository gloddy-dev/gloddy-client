'use client';

import 'swiper/css';
import 'swiper/css/free-mode';

import clsx from 'clsx';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface PickerProps {
  selectList: string[] | number[];
  isTimeZone?: boolean;
  isRangeString?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  initialValue?: string;
  setValue: (value: number) => void;
}
export default function SwipePicker({
  selectList,
  isFirst = false,
  isLast = false,
  isTimeZone = false,
  isRangeString = false,
  initialValue = '',
  setValue,
}: PickerProps) {
  return (
    <Swiper
      freeMode={{
        enabled: true,
        sticky: true,
      }}
      className="w-full"
      direction={'vertical'}
      slidesPerView={3}
      mousewheel
      slideToClickedSlide
      centeredSlides
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode]}
      onSlideChange={(swiper) => setValue(swiper.activeIndex)}
      initialSlide={initialValue ? selectList.indexOf(initialValue) : 0}
    >
      {selectList.map((slideContent) => (
        <SwiperSlide
          key={slideContent}
          className={clsx({ 'rounded-l-10': isFirst, 'rounded-r-10': isLast })}
        >
          <div
            className={clsx(
              {
                'text-12  text-blue': isRangeString,
                'text-14': isTimeZone,
              },
              'flex justify-center items-center h-full'
            )}
          >
            {slideContent}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
