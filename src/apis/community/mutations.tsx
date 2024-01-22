import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postCreateCommunityArticle } from '@/apis/community/apis';
import { Keys } from '@/apis/community/keys';
import useAppRouter from '@/hooks/useAppRouter';

export const usePostCommunityArticle = () => {
  const queryClient = useQueryClient();
  const { back } = useAppRouter();

  return useMutation({
    mutationFn: postCreateCommunityArticle,
  });
};
