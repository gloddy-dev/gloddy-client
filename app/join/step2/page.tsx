import Button from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';
import { AuthTitleTextMessage } from '@/components/TextMessage/AuthTextMessage';

const DUMMY_SEARCH_RESULT_RESULT = [
  {
    id: 1,
    name: '경희대학교 서울캠퍼스',
    address: '서울특별시 동대문구 경희대로 26',
  },
  {
    id: 2,
    name: '경희주유소',
    address: '서울특별시 동대문구 경희대로 26',
  },
  {
    id: 3,
    name: '경희주유소',
    address: '서울특별시 동대문구 경희대로 26',
  },
];

export default function Step2Page() {
  return (
    <div className="relative h-full">
      <TopNavigationBar text="회원가입" />

      <section>
        <AuthTitleTextMessage text={`재학중인 학교\n선택해주세요`} />
      </section>

      <section>
        <Input label="학교" />
      </section>

      <section>
        {DUMMY_SEARCH_RESULT_RESULT.map((searchResult) => (
          <div key={searchResult.id} className="border-b-[0.5px] border-b-gray6 p-20">
            <div className="text-14">{searchResult.name}</div>
            <div className="text-12 text-gray2">{searchResult.address}</div>
          </div>
        ))}
      </section>

      <section className="absolute bottom-0 w-full">
        <Button text="완료" disabled />
      </section>
    </div>
  );
}
