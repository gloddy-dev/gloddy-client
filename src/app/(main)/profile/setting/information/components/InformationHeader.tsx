import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function InformationHeader() {
  const router = useRouter();
  return (
    <Header>
      <Header.Left className="px-4">
        <Link href="/profile/setting">
          <IconButton size="large" onClick={() => router.back()}>
            <Image src="/icons/24/close.svg" width={24} height={24} alt="back" />
          </IconButton>
        </Link>
        <p className="text-subtitle-1">개인정보 처리 방침</p>
      </Header.Left>
    </Header>
  );
}
