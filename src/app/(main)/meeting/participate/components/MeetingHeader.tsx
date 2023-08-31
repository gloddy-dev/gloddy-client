import { Header } from '@/components/Header';

interface MeetingHeaderProps {}
export default function MeetingHeader() {
  return (
    <Header>
      <Header.Left>
        <div className="flex gap-16 px-20">
          <p>참여 모임</p>
          <p className="text-sign-sub">찜한 그룹</p>
        </div>
      </Header.Left>
    </Header>
  );
}
