import { createContext, useContext, useState } from 'react';

import { StrictPropsWithChildren } from '@/types';

export type CommentType = 'comment' | 'reply';

interface CommentContext {
  commentType: CommentType;
  commentId: number | null;
  setCommentType: (commentType: CommentType) => void;
  setCommentId: (commentId: number) => void;
}

const CommentContext = createContext<CommentContext>({
  commentType: 'comment',
  commentId: null,
  setCommentType: (commentType: CommentType) => {},
  setCommentId: (commentId: number) => {},
});

export const useComment = () => useContext(CommentContext);

export default function CommentSection({ children }: StrictPropsWithChildren) {
  const [commentType, setCommentType] = useState<CommentType>('comment');
  const [commentId, setCommentId] = useState<number | null>(null);

  return (
    <CommentContext.Provider value={{ commentType, commentId, setCommentType, setCommentId }}>
      {children}
    </CommentContext.Provider>
  );
}
