import { Header } from '@/components/Header';
import Link from 'next/link';

export default function MeetingScrapHeader() {
  return (
    <Header>
      <Header.Left>
        <div className="flex gap-16 px-20">
          <Link href="/meeting/participate?tab=participating" className="text-sign-sub">
            참여 모임
          </Link>
          <Link href="/meeting/scrap">찜한 그룹</Link>
        </div>
      </Header.Left>
    </Header>
  );
}
