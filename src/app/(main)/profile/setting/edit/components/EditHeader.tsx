import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function EditHeader() {
  return (
    <Header>
      <Header.Left className="px-4">
        <Link href="/profile/setting">
          <IconButton size="large">
            <Image src="/icons/24/close.svg" width={24} height={24} alt="back" />
          </IconButton>
        </Link>
        <p className="text-subtitle-1">프로필 수정</p>
      </Header.Left>
    </Header>
  );
}
