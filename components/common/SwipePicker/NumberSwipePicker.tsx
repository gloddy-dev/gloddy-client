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
      className="relative h-150 w-full bg-white"
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
      disableDrag={true}
    >
      {SELECT_LIST.map((slideContent) => (
        <SwiperSlide key={slideContent} className="overflow-visible">
          {({ isActive, isPrev, isNext }) => (
            <div
              className={clsx({
                'pt-10 text-66 font-700 text-black2': isActive,
                'font-500 pt-30 text-50 text-gray3': isPrev || isNext,
                'font-500 pt-50 text-35 text-gray8': !isActive && !isPrev && !isNext,
              })}
            >
              {slideContent}
            </div>
          )}
        </SwiperSlide>
      ))}
      <div className="z-100 absolute -bottom-55 left-1/2 h-134 w-134  -translate-x-1/2 -translate-y-1/2 rounded-200 bg-white4"></div>
    </Swiper>
  );
}
