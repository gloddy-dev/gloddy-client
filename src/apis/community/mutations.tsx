import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  postCommunityArticleLike,
  postCreateCommunityArticle,
  postDeleteCommunityArticle,
} from '@/apis/community/apis';
import { Keys } from '@/apis/community/keys';
import { useGetCommunityArticles } from '@/apis/community/queries';
import useAppRouter from '@/hooks/useAppRouter';

export const usePostCreateCommunityArticle = () => {
  const { back } = useAppRouter();
  const { resetAllCategory } = useGetCommunityArticles();

  return useMutation({
    mutationFn: postCreateCommunityArticle,
    onSuccess: () => {
      resetAllCategory();
      back();
    },
  });
};

export const usePostCommunityArticleLike = (articleId: number) => {
  const queryClient = useQueryClient();
  const { resetAllCategory } = useGetCommunityArticles();

  return useMutation({
    mutationFn: () => postCommunityArticleLike(articleId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: Keys.getCommunityArticleDetail(articleId) });
      resetAllCategory();
    },
  });
};

export const usePostDeleteCommunityArticle = (articleId: number) => {
  const { back } = useAppRouter();
  const { resetAllCategory } = useGetCommunityArticles();

  return useMutation({
    mutationFn: () => postDeleteCommunityArticle(articleId),
    onSuccess: () => {
      resetAllCategory();
      back();
    },
  });
};
