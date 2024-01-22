import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postCreateCommunityArticle } from '@/apis/community/apis';
import useAppRouter from '@/hooks/useAppRouter';

export const usePostCommunityArticle = () => {
  const { replace } = useAppRouter();

  return useMutation({
    mutationFn: postCreateCommunityArticle,
    onSuccess: (data) => {
      replace('/community?tab=all');
    },
  });
};
