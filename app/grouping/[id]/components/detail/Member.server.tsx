import clsx from 'clsx';
import Image from 'next/image';

interface MemberProps {
  imageUrl: string;
  name: string;
  isLeader?: boolean;
  isCertified?: boolean;
}

export default function Member({
  imageUrl,
  name,
  isLeader = false,
  isCertified = false,
}: MemberProps) {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="h-12">
        {isCertified && (
          <Image src="/assets/certified_student.svg" alt="leader_mark" width={44} height={12} />
        )}
      </div>
      <div className="relative h-40 w-40">
        <Image src={imageUrl} alt="member" className="rounded-full object-cover" fill />
        {isLeader && (
          <Image
            src="/assets/check_mark.svg"
            alt="leader_mark"
            width={14}
            height={14}
            className="absolute bottom-0 right-0"
          />
        )}
      </div>
      <p className={clsx('text-10', isLeader ? 'font-700 text-blue3' : 'font-400 text-gray7')}>
        {name}
      </p>
    </div>
  );
}
