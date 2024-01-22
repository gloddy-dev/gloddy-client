import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  postCommunityArticleLike,
  postCreateCommunityArticle,
  postDeleteCommunityArticle,
} from '@/apis/community/apis';
import { Keys } from '@/apis/community/keys';
import useAppRouter from '@/hooks/useAppRouter';

export const usePostCreateCommunityArticle = () => {
  const { back } = useAppRouter();

  return useMutation({
    mutationFn: postCreateCommunityArticle,
    onSuccess: () => {
      back();
    },
  });
};

export const usePostCommunityArticleLike = (articleId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postCommunityArticleLike(articleId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: Keys.getCommunityArticleDetail(articleId) });
    },
  });
};

export const usePostDeleteCommunityArticle = (articleId: number) => {
  const { back } = useAppRouter();

  return useMutation({
    mutationFn: () => postDeleteCommunityArticle(articleId),
    onSuccess: () => {
      back();
    },
  });
};
