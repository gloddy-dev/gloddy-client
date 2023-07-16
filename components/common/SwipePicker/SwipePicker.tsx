'use client';

import 'swiper/css';
import 'swiper/css/free-mode';

import clsx from 'clsx';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface PickerProps {
  selectList: string[];
  keyType?: string;
  isTimeZone?: boolean;
  isRangeString?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  setValue?: (value: string, keyType: string) => void;
  value?: string;
}

export default function SwipePicker({
  selectList,
  keyType = '',
  isFirst = false,
  isLast = false,
  isTimeZone = false,
  isRangeString = false,
  setValue,
  value,
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
      onSlideChange={(swiper) => setValue && setValue(selectList[swiper.activeIndex], keyType)}
      initialSlide={value ? selectList.indexOf(value) : 0}
    >
      {selectList.map((slideContent) => (
        <SwiperSlide key={slideContent}>
          {({ isActive }) =>
            isActive ? (
              <div
                className={clsx(
                  {
                    'text-25 text-gray': !isRangeString && !isTimeZone,
                    'text-12 text-blue': isRangeString,
                    'text-14': isTimeZone,

                    'rounded-l-10': isFirst,
                    'rounded-r-10': isLast,
                  },
                  'flex h-full items-center justify-center bg-[#f8f8f8] font-700 opacity-100'
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
