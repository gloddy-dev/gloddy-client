'use client';
import MemberItem from './MemberItem.client';
import { MEMBER_DUMMY_DATA } from '@/constants/dummyData';

export default function MemeberList() {
  return (
    <div className="flex flex-col gap-12 px-20">
      {MEMBER_DUMMY_DATA.map((member, index) => (
        <MemberItem key={index} {...member} />
      ))}
    </div>
  );
}
