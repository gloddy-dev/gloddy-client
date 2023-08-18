'use client';

import { type Comment, useGetComments } from '@/apis/groups';
import { Spacing } from '@/components/common/Spacing';
import { DUMMY_COMMENTS_DATA } from '@/constants/dummyData';
import clsx from 'clsx';
import Image from 'next/image';
import { Fragment } from 'react';

interface CommentItemProps {
  comment: Comment;
}

function CommentItem({ comment }: CommentItemProps) {
  const { name, date, content, userImageUrl, writer } = comment;

  return (
    <div className="p-16">
      <div className="flex">
        <div className="relative h-32 w-32 overflow-hidden rounded-full">
          <Image src={userImageUrl} alt="avatar" className="object-cover" fill />
        </div>
        <Spacing size={12} direction="horizontal" />
        <div className="flex-grow">
          <div className="flex items-center gap-6">
            <h2 className={clsx('font-700 text-14', writer ? 'text-blue' : 'text-gray')}>{name}</h2>
          </div>
          <p className="font-400 text-10 text-gray4">{date}</p>
        </div>
        <Image src="/assets/more.svg" alt="more" width={3} height={13} className="cursor-pointer" />
      </div>
      <Spacing size={12} />
      <div className="whitespace-pre-line text-12 leading-20 text-gray">{content}</div>
    </div>
  );
}

interface CommentListProps {
  groupId: number;
  boardId: number;
}

export default function CommentList({ groupId, boardId }: CommentListProps) {
  // const { data: commentsData } = useGetComments(groupId, boardId);

  return (
    <div>
      {DUMMY_COMMENTS_DATA.map((comment, index) => (
        <Fragment key={comment.commentId}>
          <CommentItem comment={comment} />
          {index !== DUMMY_COMMENTS_DATA.length - 1 && (
            <>
              <Spacing size={20} />
              <div className="h-1 bg-white3" />
              <Spacing size={20} />
            </>
          )}
        </Fragment>
      ))}
    </div>
  );
}
