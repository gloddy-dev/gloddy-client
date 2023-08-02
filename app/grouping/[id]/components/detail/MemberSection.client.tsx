import Member from './Member.server';
import { Spacing } from '@/components/common/Spacing';
import Image from 'next/image';

export default function MemberSection() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-14">모임 멤버</h2>
        <Image src="/assets/arrow_right_gray.svg" alt="arrow_right" width={7} height={14} />
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
