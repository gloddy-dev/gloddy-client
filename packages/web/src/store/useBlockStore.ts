import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type BlockType = 'group' | 'article' | 'comment' | 'notice' | 'communityArticle' | 'communityComment'

type BlockState = {
  blockGroupIds: number[];
  blockArticleIds: number[];
  blockCommentIds: number[];
  blockNoticeIds: number[];
  blockCommunityArticleIds: number[];
  blockCommunityCommentIds: number[];
  setBlockId: (id: number, type: BlockType) => void;
};

export const useBlockStore = create(
  persist<BlockState>(
    (set) => ({
      blockArticleIds: [],
      blockCommentIds: [],
      blockGroupIds: [],
      blockNoticeIds: [],
      blockCommunityArticleIds: [],
      blockCommunityCommentIds: [],
      setBlockId: (id: number, type: BlockType) => {
        set((state) => {
          const capitalizedState = ('block' +
            (type.charAt(0).toUpperCase() + type.slice(1)) +
            'Ids') as keyof Omit<BlockState, 'setBlockId'>;

          if (state[capitalizedState].includes(id)) return state;

          return {
            ...state,
            [capitalizedState]: [...state[capitalizedState], id],
          };
        });
      },
    }),
    {
      name: 'blockIds',
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
