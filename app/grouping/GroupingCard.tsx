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
      className="mb-18 flex h-126 w-full flex-col justify-between rounded-8 bg-white px-20 py-16 pl-14"
      onClick={onClick}
    >
      <div className="flex w-full flex-row">
        <div className="h-60 w-60 rounded-8 bg-white3"></div>
        <div className="ml-13 flex w-206 flex-col">
          <div className="text-14 font-700">{title}</div>
          <div className="text-12 font-400">{description}</div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex items-center">
          <Image src="/assets/avatar.svg" alt="avatar" width={10} height={12} />
          <div className="ml-7 text-12 font-700">{`${current}명`}</div>
          <div className="text-12 font-400">{`/ ${total}명`}</div>
        </div>
        <div className="ml-8 flex items-center">
          <Image src="/assets/location.svg" alt="location" width={10} height={12} />
          <div className="ml-5 text-12 font-400">{location}</div>
        </div>

        <div className="ml-6 text-12 font-400 text-blue3">{time}</div>
      </div>
    </div>
  );
};

export default GroupingCard;
