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
        <Image src="/assets/home_fill.svg" alt="grouping-icon" width={30} height={30} />
      ) : (
        <Image src="/assets/home_white.svg" alt="grouping-icon" width={30} height={30} />
      ),
    badge: Badge.dot,
  },
  {
    key: 'meeting',
    title: '나의모임',
    icon: (active: string) =>
      active === 'meeting' ? (
        <Image src="/assets/people_fill.svg" alt="people-icon" width={30} height={30} />
      ) : (
        <Image src="/assets/people_white.svg" alt="people-icon" width={30} height={30} />
      ),
    badge: Badge.dot,
  },
  {
    key: 'profile',
    title: '프로필',
    icon: (active: string) =>
      active === 'profile' ? (
        <Image src="/assets/profile_fill.svg" alt="profile-icon" width={30} height={30} />
      ) : (
        <Image src="/assets/profile_white.svg" alt="profile-icon" width={30} height={30} />
      ),
    badge: Badge.dot,
  },
];

const BottomNavigation = () => {
  const pathname = usePathname();
  const [activeKey, setActiveKey] = useState(pathname.substring(1));

  return (
    <div className="fixed bottom-0 left-0 grid h-110 w-full grid-cols-3 rounded-t-25 bg-white px-40">
      {tabs.map((tab) => (
        <div
          key={tab.key}
          onClick={() => setActiveKey(tab.key)}
          className="flex flex-col items-center justify-center"
        >
          <Link href={tab.key}>
            <div className="flex h-50 items-center justify-center">
              <Badge color="#1249FC" content={tab.badge}>
                {tab.icon(activeKey)}
              </Badge>
            </div>

            {activeKey === tab.key ? (
              <div className="text-10 font-700 text-blue">{tab.title}</div>
            ) : (
              <div className="text-10 font-400 text-gray4">{tab.title}</div>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;
