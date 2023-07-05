'use client';

import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface PickerProps {
  selectList: string[] | number[];
  initialValue?: number;
  setValue?: (value: number) => void;
}
export default function PersonnelPicker({ selectList, initialValue = 0, setValue }: PickerProps) {
  return (
    <div className="mt-40">
      <Swiper
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        className="relative h-150 w-full bg-white"
        slidesPerView={5}
        spaceBetween={40}
        slideToClickedSlide
        centeredSlides
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        onSlideChange={(swiper) => setValue && setValue(swiper.activeIndex)}
        initialSlide={initialValue ? selectList.indexOf(initialValue as never) : 0}
      >
        {selectList.map((slideContent) => (
          <SwiperSlide key={slideContent} className="overflow-visible">
            {({ isActive, isPrev, isNext }) =>
              isActive ? (
                <div className="flex items-center justify-center pt-10 text-66 font-700 text-black2">
                  {slideContent}
                </div>
              ) : isPrev || isNext ? (
                <div className="font-500 flex items-center justify-center pt-30 text-50 text-gray3">
                  {slideContent}
                </div>
              ) : (
                <div className="font-500 flex items-center justify-center pt-50 text-35 text-gray8">
                  {slideContent}
                </div>
              )
            }
          </SwiperSlide>
        ))}
        <div className="z-100 absolute -bottom-55 left-1/2 h-134 w-134  -translate-x-1/2 -translate-y-1/2 rounded-200 bg-white4"></div>
      </Swiper>
    </div>
  );
}
