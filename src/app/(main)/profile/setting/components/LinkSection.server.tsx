import { Divider } from '@/components/Divider';
import Link from 'next/link';

export default function LinkSection() {
  return (
    <section className="text-subtitle-2">
      <div className="flex px-20 py-12">
        <span>버전</span>
        <span className="ml-auto text-caption text-sign-caption">1.0.0v</span>
      </div>
      <div className="px-20 py-12">
        <span>FAQ</span>
      </div>
      <div className="px-20 py-12">
        <Link href="/profile/setting/service">서비스 이용약관</Link>
      </div>
      <div className="px-20 py-12">
        <Link href="/profile/setting/information">개인정보 처리방침</Link>
      </div>
      <Divider thickness="thick" />
      <div className="px-20 py-12 ">
        <Link href="/profile/setting/quit">계정 삭제하기</Link>
      </div>
    </section>
  );
}
