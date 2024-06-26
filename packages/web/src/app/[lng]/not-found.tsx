import { Empty } from '@/components/Empty';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <div>
      <Empty message={`[404] 페이지를 찾을 수 없습니다. 입력하신 주소를 다시 확인해 주세요.`} />
      <Footer />
    </div>
  );
}
