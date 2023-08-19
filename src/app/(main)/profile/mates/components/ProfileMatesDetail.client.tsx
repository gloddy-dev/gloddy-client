'use client';

import { formatRelativeDate } from '../util';
import { type Mate, useGetMates } from '@/apis/profile';
import { Spacing } from '@/components/common/Spacing';
import { DUMMY_PROFILE_MATES_DATA } from '@/constants/dummyData';
import Image from 'next/image';

export default function ProfileMatesDetail() {
  const {
    data: { mates: matesData },
  } = useGetMates();

  return (
    <main className="px-20">
      {DUMMY_PROFILE_MATES_DATA.map((mateData) => (
        <ProfileMate key={mateData.createdAt} mateData={mateData} />
      ))}
    </main>
  );
}

interface ProfileMateProps {
  mateData: Mate;
}

function ProfileMate({ mateData }: ProfileMateProps) {
  return (
    <div className="mt-14 rounded-8 bg-gray6 p-16" key={mateData.createdAt}>
      <section className="relative flex">
        <Image alt="profile" src={mateData.mateImageUrl} width={30} height={30} />
        <Spacing size={16} direction="horizontal" />
        <div>
          <p className="font-700 text-16">{mateData.mateName}</p>
          <p className="text-10 text-gray2">
            {mateData.school} | {formatRelativeDate(mateData.createdAt)}
          </p>
        </div>
        <Image
          alt="more"
          src="/assets/more.svg"
          width={3}
          height={10}
          className="absolute right-0"
        />
      </section>
      <Spacing size={10} />
      <section className="rounded-8 bg-white p-16 text-10 leading-20">
        {mateData.selectionReason}
      </section>
    </div>
  );
}
