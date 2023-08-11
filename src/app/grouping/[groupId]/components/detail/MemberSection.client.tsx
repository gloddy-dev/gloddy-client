'use client';

import Member from './Member.client';
import { Spacing } from '@/components/common/Spacing';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function MemberSection() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-14">모임 멤버</h2>
        <Image
          src="/assets/arrow_right_gray.svg"
          alt="arrow_right"
          width={7}
          height={14}
          className="cursor-pointer"
          onClick={() => router.push(`${pathname}/members`)}
        />
      </div>
      <Spacing size={10} />
      <div className="flex items-center gap-23 overflow-x-scroll">
        <Member imageUrl="/assets/avatar.svg" name="Peter" isLeader />
        <Member imageUrl="/assets/avatar.svg" name="Person" isCertified />
        <Member imageUrl="/assets/avatar.svg" name="Person" isCertified />
        <Member imageUrl="/assets/avatar.svg" name="Person" />
        <Member imageUrl="/assets/avatar.svg" name="Person" />
        <Member imageUrl="/assets/avatar.svg" name="Person" />
        <Member imageUrl="/assets/avatar.svg" name="Person" />
        <Member imageUrl="/assets/avatar.svg" name="Person" />
        <Member imageUrl="/assets/avatar.svg" name="Person" />
        <Member imageUrl="/assets/avatar.svg" name="Person" />
        <Member imageUrl="/assets/avatar.svg" name="Person" />
        <Member imageUrl="/assets/avatar.svg" name="Person" />
        <Member imageUrl="/assets/avatar.svg" name="Person" />
        <Member imageUrl="/assets/avatar.svg" name="Person" />
        <Member imageUrl="/assets/avatar.svg" name="Person" />
        <Member imageUrl="/assets/avatar.svg" name="Person" />
      </div>
    </section>
  );
}
