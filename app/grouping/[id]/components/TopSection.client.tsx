'use client';
import Spacing from '@/components/common/Spacing';
import Tabs from '@/components/common/Tabs';
import Image from 'next/image';

interface TopSectionProps {
  id: string;
  thumbnailUrl: string;
  title: string;
  description?: string;
}

export default function TopSection({ id, title, thumbnailUrl, description }: TopSectionProps) {
  return (
    <section>
      <div className="relative h-350">
        <Image src={thumbnailUrl} alt="thumbnail" className="w-full rounded-b-35" fill />
        <Image
          src="/assets/check_mark.svg"
          alt="check"
          width={32}
          height={32}
          className="absolute -bottom-16 right-20"
        />
      </div>
      <div className="p-20">
        <Spacing size={16} />
        <h1 className="text-18 font-700 text-gray">{title}</h1>
        <Spacing size={8} />
        <p className="text-12 font-400 text-gray2">{description}</p>
      </div>
      <Tabs>
        <Tabs.Tab title="상세정보" url={`/grouping/${id}`} />
        <Tabs.Tab title="게시판" url={`/grouping/${id}/board`} />
      </Tabs>
    </section>
  );
}
