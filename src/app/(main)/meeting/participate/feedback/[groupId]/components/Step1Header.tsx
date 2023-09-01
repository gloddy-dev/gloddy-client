import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Step1Header() {
  return (
    <Header className="px-4">
      <Header.Left>
        <Link href="/meeting/participate">
          <IconButton size="large">
            <Image src="/icons/24/arrow_back.svg" width={24} height={24} alt="back" />
          </IconButton>
        </Link>
        <p>모임 평가하기</p>
      </Header.Left>
    </Header>
  );
}
