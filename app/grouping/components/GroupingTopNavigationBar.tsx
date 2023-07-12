import Image from 'next/image';

import { TopNavigationBar } from '@/components/common/NavigationBar';

export default function GroupingTopNavigationBar() {
  return (
    <TopNavigationBar
      leftNode={<p>그루핑</p>}
      rightNode={<Image src="/assets/search_navbar.svg" alt="search" width={15} height={15} />}
    />
  );
}
