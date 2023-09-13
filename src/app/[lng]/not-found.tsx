import NoMeeting from './(main)/meeting/components/NoMeeting';
import { Footer } from '@/components/Footer';

interface NotFoundProps {
  params: {
    lng: string;
  };
}

export default function NotFound({ params: { lng } }: NotFoundProps) {
  return (
    <div>
      <NoMeeting
        message={`[404] 페이지를 찾을 수 없습니다.
입력하신 주소를 다시 확인해 주세요.`}
      />
      <Footer lng={lng} />
    </div>
  );
}
