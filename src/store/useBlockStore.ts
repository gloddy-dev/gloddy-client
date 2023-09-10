import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type BlockState = {
  blockGroupIds: number[];
  blockArticleIds: number[];
  blockCommentIds: number[];
  blockNoticeIds: number[];
  setBlockId: (id: number, type: 'group' | 'article' | 'comment' | 'notice') => void;
};

export const useBlockStore = create(
  persist<BlockState>(
    (set) => ({
      blockArticleIds: [],
      blockCommentIds: [],
      blockGroupIds: [],
      blockNoticeIds: [],
      setBlockId: (id: number, type: 'group' | 'article' | 'comment' | 'notice') => {
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
