'use client';
import { useEffect, useState } from 'react';

import Button from '@/components/common/Button';
import CircleCheckbox from '@/components/common/Checkbox/CircleCheckbox';
import { Input } from '@/components/common/Input';
import BottomUpModal from '@/components/common/Modal/BottomUpModal';
import TopNavigationBar from '@/components/common/NavigationBar/TopNavigationBar';
import { AuthTitleTextMessage } from '@/components/TextMessage/AuthTextMessage';
import { useModal } from '@/hooks/useModal';

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
  const { isModalOpen, openModal, closeModal } = useModal<'modal'>();
  useEffect(() => {
    openModal('modal');
  }, [openModal]);
  const [agreeCheckList, setAgreeCheckList] = useState<boolean[]>([false, false]);
  return (
    <div className="relative h-full">
      <TopNavigationBar text="회원가입" />
      <BottomUpModal
        snap={300}
        isModalOpen={isModalOpen}
        onClose={closeModal}
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
          <div className="my-15 border-[0.5px] border-white3" />
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
            onClick={closeModal}
          />
        </section>
      </BottomUpModal>
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
