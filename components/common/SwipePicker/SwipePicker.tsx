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
  initialValue?: string;
  setValue?: (value: string, keyType: string) => void;
}
export default function SwipePicker({
  selectList,
  keyType = '',
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
      onSlideChange={(swiper) => setValue && setValue(selectList[swiper.activeIndex], keyType)}
      initialSlide={initialValue ? selectList.indexOf(initialValue as never) : 0}
    >
      {selectList.map((slideContent) => (
        <SwiperSlide
          key={slideContent}
          className={clsx({ 'rounded-l-10': isFirst, 'rounded-r-10': isLast })}
        >
          {({ isActive }) =>
            isActive ? (
              <div
                className={clsx(
                  {
                    'text-25 text-gray': !isRangeString && !isTimeZone,
                    'text-12 text-blue': isRangeString,
                    'text-14': isTimeZone,
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
