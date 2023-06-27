'use client';

import Image from 'next/image';

import boardFill from '../../assets/board_fill.svg';
import boardWhite from '../../assets/board_white.svg';
import homeFill from '../../assets/home_fill.svg';
import homeWhite from '../../assets/home_white.svg';
import peopleFill from '../../assets/people_fill.svg';
import peopleWhite from '../../assets/people_white.svg';
import profileFill from '../../assets/profile_fill.svg';
import profileWhite from '../../assets/profile_white.svg';

const BottomNavigation = () => {
  return (
    <div className="absolute bottom-0 grid grid-cols-4 w-full bg-white">
      <Image src={homeFill} alt="img" width={30} height={30} />
      <div className="px-5">home</div>
      <Image src={boardFill} alt="img" width={30} height={30} />
      <Image src={peopleFill} alt="img" width={30} height={30} />
      <Image src={profileFill} alt="img" width={30} height={30} />
    </div>
  );
};

export default BottomNavigation;
