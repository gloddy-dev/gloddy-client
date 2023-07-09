import CircleCheckbox from '@/components/common/Checkbox/CircleCheckbox';
import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';
import { Spacing } from '@/components/common/Spacing';
import { AuthTitleTextMessage } from '@/components/TextMessage/AuthTextMessage';

import InputForm from './InputForm';

export default function Step1Page() {
  return (
    <div>
      <TopNavigationBar text="회원가입" />

      <section>
        <AuthTitleTextMessage text={`휴대폰 번호를\n인증해주세요`} />
      </section>

      <InputForm />

      <Spacing size={18} />
      <div className="h-18" />

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
      </section>
    </div>
  );
}
