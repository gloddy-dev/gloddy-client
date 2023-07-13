'use client';
import Spacing from '@/components/common/Spacing';
import Image from 'next/image';

export default function Notice() {
  const noticeList = [
    {
      title: '가입 인사 작성 방법',
      onClick: () => {},
    },
    {
      title: '모임 간 지켜야할 수칙',
      onClick: () => {},
    },
  ];

  return (
    <div className="rounded-8 bg-white2 p-16 text-12">
      <h2>공지사항</h2>
      <Spacing size={10} />
      <div className="flex flex-col gap-10">
        {noticeList.map(({ title, onClick }) => (
          <NoticeItem key={title} title={title} onClick={onClick} />
        ))}
      </div>
    </div>
  );
}

interface NoticeItemProps {
  title: string;
  onClick?: () => void;
}

function NoticeItem({ title, onClick }: NoticeItemProps) {
  return (
    <div className="flex items-center gap-8" onClick={onClick}>
      <Image src="/assets/notice.svg" alt="notice" width={15} height={15} />
      <p className="text-gray">{title}</p>
      <Image
        src="/assets/arrow_right_gray.svg"
        alt="right"
        width={7}
        height={14}
        className="cursor-pointer"
      />
    </div>
  );
}
