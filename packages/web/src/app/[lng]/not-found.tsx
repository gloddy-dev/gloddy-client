import NoMeeting from './(main)/meeting/components/NoMeeting';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/Footer/Footer'), { ssr: false });

export default function NotFound() {
  return (
    <div>
      <NoMeeting
        message={`[404] 페이지를 찾을 수 없습니다.
입력하신 주소를 다시 확인해 주세요.`}
      />
      <Footer lng="ko" />
    </div>
  );
}
