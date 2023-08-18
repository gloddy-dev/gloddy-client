'use client';
import MemberItem from './MemberItem.client';
import { MEMBER_DUMMY_DATA } from '@/constants/dummyData';

export default function MemeberList() {
  return (
    <div className="flex flex-col gap-12 px-20">
      {/* {MEMBER_DUMMY_DATA.map((member, index) => (
        <MemberItem key={index} {...member} />
      ))} */}
      {/* props에서 에러가 발생하는데, 로직을 몰라 추후 리팩토링하게 될 때 반영하겠습니다. */}
    </div>
  );
}
