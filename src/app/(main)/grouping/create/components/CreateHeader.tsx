import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function CreateHeader() {
  return (
    <Header className="px-4">
      <Header.Left>
        <Link href="/grouping">
          <IconButton size="large">
            <Image src="/icons/24/arrow_back.svg" alt="back" width={24} height={24} />
          </IconButton>
        </Link>
        <p>모임 개설하기</p>
      </Header.Left>
    </Header>
  );
}
