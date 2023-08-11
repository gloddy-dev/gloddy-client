import { CircleCheckbox } from '@/components/common/Checkbox';
import { InfoMessage } from '@/components/InfoMessage';

export default function CheckboxSection() {
  return (
    <section>
      <CircleCheckbox
        text={<span className=" text-[0.875rem]">휴대폰 번호는 안전하게 보관됩니다.</span>}
        checked
      />
      <div className="h-10" />
      <CircleCheckbox
        text={<span className=" text-[0.875rem]">휴대폰 번호는 어디에도 공개되지 않습니다.</span>}
        checked
      />
      <InfoMessage>휴대폰 번호는 안전하게 보관됩니다.</InfoMessage>
    </section>
  );
}
