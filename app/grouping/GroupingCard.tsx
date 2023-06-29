import Image from 'next/image';
import React from 'react';

interface GroupingCardProps {
  image?: string;
  title: string;
  description: string;
  current: string;
  total: string;
  location: string;
  time: string;
  onClick?: () => void;
}

const GroupingCard = ({ ...props }: GroupingCardProps) => {
  const { title, description, current, total, location, time, onClick } = props;
  return (
    <div
      className="w-full h-126 bg-white rounded-8 pl-14 px-43 py-16 flex flex-col justify-between mb-18"
      onClick={onClick}
    >
      <div className="flex flex-row w-full">
        <div className="w-60 h-60 bg-white3 rounded-8"></div>
        <div className="flex flex-col w-206 ml-13">
          <div className="text-14 font-700">{title}</div>
          <div className="text-12 font-400">{description}</div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex items-center">
          <Image src="/assets/avatar.svg" alt="avatar" width={10} height={12} />
          <div className="text-12 font-700 ml-7">{`${current}명`}</div>
          <div className="text-12 font-400">{`/ ${total}명`}</div>
        </div>
        <div className="flex items-center ml-8">
          <Image src="/assets/location.svg" alt="location" width={10} height={12} />
          <div className="text-12 font-400 ml-5">{location}</div>
        </div>

        <div className="ml-6 text-12 text-blue3 font-400">{time}</div>
      </div>
    </div>
  );
};

export default GroupingCard;
