import { TopNavigationBar } from '@/components/common/NavigationBar';
import Image from 'next/image';

export default function ProfileTopNavigationBar() {
  return (
    <TopNavigationBar
      isSpacing={false}
      rightNode={<Image src="/assets/setting_black.svg" width={24} height={24} alt="setting" />}
    />
  );
}
