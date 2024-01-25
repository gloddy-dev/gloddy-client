import { createContext, useContext, useState } from 'react';

import { StrictPropsWithChildren } from '@/types';

export type CommentType = 'comment' | 'reply';

interface CommentContext {
  commentType: CommentType;
  commentId: number | null;
  setCommentType: (commentType: CommentType) => void;
  setCommentId: (commentId: number) => void;
}

export const CommentContext = createContext<CommentContext>({
  commentType: 'comment',
  commentId: null,
  setCommentType: (commentType: CommentType) => {},
  setCommentId: (commentId: number) => {},
});

export const useCommentContext = () => {
  const context = useContext(CommentContext);

  if (context == null) {
    throw new Error('useModal is only available within ModalProvider.');
  }

  return context;
};

export default function CommentProvider({ children }: StrictPropsWithChildren) {
  const [commentType, setCommentType] = useState<CommentType>('comment');
  const [commentId, setCommentId] = useState<number | null>(null);

  return (
    <CommentContext.Provider value={{ commentType, commentId, setCommentType, setCommentId }}>
      {children}
    </CommentContext.Provider>
  );
}
