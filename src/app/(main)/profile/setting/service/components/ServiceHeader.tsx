import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ServiceHeader() {
  const router = useRouter();
  return (
    <Header>
      <Header.Left className="px-4">
        <IconButton size="large" onClick={() => router.back()}>
          <Image src="/icons/24/close.svg" width={24} height={24} alt="back" />
        </IconButton>
        <p className="text-subtitle-1">서비스 이용 약관</p>
      </Header.Left>
    </Header>
  );
}
