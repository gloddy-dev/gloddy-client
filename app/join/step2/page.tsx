'use client';
import Button from '@/components/common/Button';
import AuthInput from '@/components/common/Input/AuthInput';
import ButtomUpModal from '@/components/common/Modal/ButtomUpModal';
import ModalWrapper from '@/components/common/Modal/ModalWrapper';
import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';
import { TitleTextMessage } from '@/components/join/TextMessage';

const DUMMY_SEARCH_RESULT_RESULT = [
  {
    id: 1,
    name: '경희대학교 서울캠퍼스',
    주소: '서울특별시 동대문구 경희대로 26',
  },
  {
    id: 2,
    name: '경희주유소',
    주소: '서울특별시 동대문구 경희대로 26',
  },
  {
    id: 3,
    name: '경희주유소',
    주소: '서울특별시 동대문구 경희대로 26',
  },
];

export default function Step2Page() {
  return (
    <div className="relative h-full ">
      <ButtomUpModal />
      <TopNavigationBar text="회원가입" />
      <section>
        <TitleTextMessage text={`재학중인 학교\n선택해주세요`} />
      </section>

      <section>
        <AuthInput text="학교" />
      </section>

      <section>
        {DUMMY_SEARCH_RESULT_RESULT.map((searchResult) => (
          <div key={searchResult.id} className="p-20 border-b-gray6 border-b-[0.5px]">
            <div className="text-14">{searchResult.name}</div>
            <div className="text-12 text-gray2">{searchResult.주소}</div>
          </div>
        ))}
      </section>

      <section className="absolute bottom-0 w-full">
        <Button text="완료" disabled />
      </section>
    </div>
  );
}
