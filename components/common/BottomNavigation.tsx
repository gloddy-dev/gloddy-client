'use client';

import { Badge } from 'antd-mobile';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const tabs = [
  {
    key: 'grouping',
    title: '그루핑',
    icon: (active: string) =>
      active === 'grouping' ? (
        <Image src="/assets/home_fill.svg" alt="img" width={30} height={30} />
      ) : (
        <Image src="/assets/home_white.svg" alt="img" width={30} height={30} />
      ),
    badge: Badge.dot,
  },
  {
    key: 'board',
    title: '게시판',
    icon: (active: string) =>
      active === 'board' ? (
        <Image src="/assets/board_fill.svg" alt="img" width={30} height={30} />
      ) : (
        <Image src="/assets/board_white.svg" alt="img" width={30} height={30} />
      ),
    badge: Badge.dot,
  },
  {
    key: 'meeting',
    title: '나의모임',
    icon: (active: string) =>
      active === 'meeting' ? (
        <Image src="/assets/people_fill.svg" alt="img" width={30} height={30} />
      ) : (
        <Image src="/assets/people_white.svg" alt="img" width={30} height={30} />
      ),
    badge: Badge.dot,
  },
  {
    key: 'profile',
    title: '프로필',
    icon: (active: string) =>
      active === 'profile' ? (
        <Image src="/assets/profile_fill.svg" alt="img" width={30} height={30} />
      ) : (
        <Image src="/assets/profile_white.svg" alt="img" width={30} height={30} />
      ),
    badge: Badge.dot,
  },
];

const BottomNavigation = () => {
  const pathname = usePathname();
  const [activeKey, setActiveKey] = useState(pathname.substring(1));
  const router = useRouter();
  const handleNavigation = (path: string) => {
    setActiveKey(path);
    router.push(path);
  };
  return (
    <div className="fixed bottom-0 z-10 left-0 w-full bg-white grid grid-cols-4 h-100 rounded-t-[1.563rem] px-40">
      {tabs.map((tab) => (
        <div
          key={tab.key}
          onClick={() => handleNavigation(tab.key)}
          className="flex flex-col justify-center items-center"
        >
          <div className="h-50 flex justify-center items-center">
            <Badge color="#1249FC" content={tab.badge}>
              {tab.icon(activeKey)}
            </Badge>
          </div>

          {activeKey === tab.key ? (
            <div className="font-700 text-[0.625rem] text-blue">{tab.title}</div>
          ) : (
            <div className="font-400 text-[0.625rem] text-gray4">{tab.title}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;
