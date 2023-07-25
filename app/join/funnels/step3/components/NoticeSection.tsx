import { CircleCheckbox } from '@/components/common/Checkbox';
import { Spacing } from '@/components/common/Spacing';
import { INSTAGRAM_URL } from '@/constants';
import Link from 'next/link';

export default function NoticeSection() {
  return (
    <section>
      <CircleCheckbox
        text={
          <span className="text-14">
            재학생 인증을 진행하면 <span className="text-14 font-700 text-blue">인증마크</span>를
            받을 수 있어요
          </span>
        }
        checked
      />
      <Spacing size={10} />
      <CircleCheckbox
        text={<span className="text-14">신뢰있는 모임을 위해 재학생 인증을 꼭 진행해주세요</span>}
        checked
      />
      <Spacing size={10} />
      <CircleCheckbox
        text={
          <span className="text-14">
            재학생 이메일 발급 <br />
            <Link href={INSTAGRAM_URL}>{INSTAGRAM_URL}</Link>
          </span>
        }
        checked
      />
    </section>
  );
}
