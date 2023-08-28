'use client';
import { useGetGroupDetail } from '@/apis/groups';
import { IconButton } from '@/components/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

interface BoardHeaderProps {
  groupId: number;
}

export default function BoardHeader({ groupId }: BoardHeaderProps) {
  // const { data } = useGetGroupDetail(groupId);
  const handleMoreClick = () => {
    console.log('more');
  };

  return (
    <Header className="px-4">
      <Header.Left>
        <Link href={`/grouping/${groupId}?tab=board`}>
          <IconButton size="large">
            <Image src="/icons/24/arrow_back.svg" alt="back" width={24} height={24} />
          </IconButton>
        </Link>
        <p>게시글</p>
      </Header.Left>
      <Header.Right>
        <IconButton size="large" onClick={handleMoreClick}>
          <Image src="/icons/24/more.svg" alt="more" width={24} height={24} />
        </IconButton>
      </Header.Right>
    </Header>
  );
}
