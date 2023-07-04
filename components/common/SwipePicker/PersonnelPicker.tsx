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
        className="w-full bg-white relative h-150"
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
                <div className="flex justify-center items-center text-black2 text-66 font-700 pt-10">
                  {slideContent}
                </div>
              ) : isPrev || isNext ? (
                <div className="flex justify-center items-center text-gray3 text-50 font-500 pt-30">
                  {slideContent}
                </div>
              ) : (
                <div className="flex justify-center items-center text-gray8 text-35 font-500 pt-50">
                  {slideContent}
                </div>
              )
            }
          </SwiperSlide>
        ))}
        <div className="absolute z-100 -bottom-55 left-1/2 -translate-y-1/2 -translate-x-1/2  w-134 h-134 bg-white4 rounded-200"></div>
      </Swiper>
    </div>
  );
}
