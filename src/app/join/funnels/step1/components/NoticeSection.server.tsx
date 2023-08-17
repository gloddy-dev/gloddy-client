import { Spacing } from '@/components/common/Spacing';
import { TextList } from '@/components/TextList';

export default function NoticeSection() {
  return (
    <section>
      <TextList variant="caption">휴대폰 번호는 안전하게 보관됩니다.</TextList>
      <Spacing size={8} />
      <TextList variant="caption">휴대폰 번호는 어디에도 공개되지 않습니다.</TextList>
    </section>
  );
}
