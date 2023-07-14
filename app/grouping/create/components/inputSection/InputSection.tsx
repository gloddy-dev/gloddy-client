import { Input } from 'antd-mobile';

import { Spacing } from '@/components/common/Spacing';

interface InputSectionProps {}
export default function InputSection({ onInputClick }) {
  return (
    <section onClick={onInputClick}>
      <p className="text-14">모임 장소</p>
      <Spacing size={10} />
      <Input readOnly value={location} placeholder="모임 장소를 설정해주세요." />
      <Spacing size={15} />
    </section>
  );
}
