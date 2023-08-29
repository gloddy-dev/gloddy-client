import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

interface MembersHeaderProps {
  groupId: number;
}
export default function MembersHeader({ groupId }: MembersHeaderProps) {
  return (
    <Header>
      <Header.Left className="px-4">
        <Link href={`/grouping/${groupId}`}>
          <IconButton size="large">
            <Image src="/icons/24/arrow_back.svg" alt="back" width={24} height={24} />
          </IconButton>
        </Link>
        <p>모임 멤버</p>
      </Header.Left>
    </Header>
  );
}
