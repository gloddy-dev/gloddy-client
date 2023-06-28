import Image from 'next/image';
import React from 'react';

interface GroupingCardProps {
  image: string;
  title: string;
  description: string;
  current: string;
  total: string;
  location: string;
  time: string;
}

const GroupingCard = ({ ...props }: GroupingCardProps) => {
  const { image, title, description, current, total, location, time } = props;
  return (
    <div className="w-full h-126 bg-white rounded-8 pl-14 px-43 py-16 flex flex-col justify-between">
      <div className="flex flex-row w-full justify-between">
        <div className="w-60 h-60">
          <Image src={image} alt="img" width={60} height={60} />
        </div>
        <div className="flex flex-col w-206">
          <div className="text-14 font-700">{title}</div>
          <div className="text-12 font-400">{description}</div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <Image src="/assets/avatar.svg" alt="img" width={10} height={12} />
        <div className="text-12 font-700">{`${current}명 / ${total}명`}</div>
        <Image src="/assets/location.svg" alt="img" width={10} height={12} />
        <div className="text-12 font-400">{location}</div>
        <div className="text-12 text-blue3 font-400">{time}</div>
      </div>
    </div>
  );
};

export default GroupingCard;
