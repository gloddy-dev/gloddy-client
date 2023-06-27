'use client';

import { Badge } from 'antd-mobile';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement, ReactNode, useState } from 'react';

interface Tab {
  key: string;
  title: string;
  icon: (active: string) => ReactNode;
  badge: ReactElement;
}

const tabs: Tab[] = [
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

  const handleNavigation = (path: string) => {
    setActiveKey(path);
  };
  return (
    <div className="fixed bottom-0 z-10 left-0 w-full bg-white grid grid-cols-4 h-100 rounded-t-25 px-40">
      {tabs.map((tab) => (
        <div
          key={tab.key}
          onClick={() => handleNavigation(tab.key)}
          className="flex flex-col justify-center items-center"
        >
          <Link href={tab.key}>
            <div className="h-50 flex justify-center items-center">
              <Badge color="#1249FC" content={tab.badge}>
                {tab.icon(activeKey)}
              </Badge>
            </div>

            {activeKey === tab.key ? (
              <div className="font-700 text-10 text-blue">{tab.title}</div>
            ) : (
              <div className="font-400 text-10 text-gray4">{tab.title}</div>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;
