import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postCreateCommunityArticle } from '@/apis/community/apis';
import { Keys } from '@/apis/community/keys';
import useAppRouter from '@/hooks/useAppRouter';

export const usePostCommunityArticle = () => {
  const { back } = useAppRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCreateCommunityArticle,
    onSuccess: (data) => {
      back()
    },
  });
};
