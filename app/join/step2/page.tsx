'use client';
import { useState } from 'react';

import Button from '@/components/common/Button';
import CircleCheckbox from '@/components/common/Checkbox/CircleCheckbox';
import AuthInput from '@/components/common/Input/AuthInput';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [agreeCheckList, setAgreeCheckList] = useState<boolean[]>([false, false]);
  return (
    <div className="relative h-full ">
      <BottomUpModal
        snap={300}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        disableDrag
        text={<div className="text-center font-700">약관 동의</div>}
      >
        <section>
          <CircleCheckbox
            text="전체 동의"
            checked={agreeCheckList[0] && agreeCheckList[1]}
            onClick={() => {
              if (agreeCheckList[0] && agreeCheckList[1]) {
                setAgreeCheckList([false, false]);
              } else {
                setAgreeCheckList([true, true]);
              }
            }}
          />
          <div className="border-[0.5px] border-white3 my-15" />
          <CircleCheckbox
            text={
              <p>
                <span className="text-12 text-gray3">(필수) </span>
                <span className="text-12">서비스 이용약관 동의</span>
              </p>
            }
            checked={agreeCheckList[0]}
            onClick={() => setAgreeCheckList((prev) => [!prev[0], prev[1]])}
          />
          <CircleCheckbox
            text={
              <p>
                <span className="text-12 text-gray3">(필수) </span>
                <span className="text-12">개인정보 취급방침 동의</span>
              </p>
            }
            checked={agreeCheckList[1]}
            onClick={() => setAgreeCheckList((prev) => [prev[0], !prev[1]])}
          />
        </section>

        <div className="h-30" />

        <section>
          <Button
            text="완료"
            disabled={agreeCheckList.some((checkItem) => !checkItem)}
            onClick={() => setIsModalOpen(false)}
          />
        </section>
      </BottomUpModal>
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
