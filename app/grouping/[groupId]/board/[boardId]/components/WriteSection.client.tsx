'use client';
import BottomFixedDiv from '@/components/common/BottomFixedDiv';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import Image from 'next/image';
import { useState } from 'react';

interface WriteSectionProps {
  groupId: number;
  boardId: number;
}

export default function WriteSection({ groupId, boardId }: WriteSectionProps) {
  const [comment, setComment] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(comment);

    setComment('');
  };

  return (
    <BottomFixedDiv>
      <form onSubmit={handleSubmit} className="flex items-center gap-10">
        <Input
          placeholder="댓글 쓰기"
          className="h-50 text-12"
          value={comment}
          onChange={handleChange}
        />
        <Button type="submit" className="h-50 w-50 flex-shrink-0">
          <div className="item-center flex justify-center">
            <Image src="/assets/comment_white.svg" alt="comment" width={20} height={20} />
          </div>
        </Button>
      </form>
    </BottomFixedDiv>
  );
}
