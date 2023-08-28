import { postArticle, postComment, postCreateGroup } from './apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const usePostCreateGroup = () => {
  return useMutation(postCreateGroup);
};

export const usePostArticle = (groupId: number) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(postArticle, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['getArticles', groupId]);
      router.push(`/grouping/${groupId}/board/${data.articleId}`);
    },
  });
};

export const usePostComment = (groupId: number, articleId: number) => {
  const queryClient = useQueryClient();

  return useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['getComments', groupId, articleId]);
      queryClient.invalidateQueries(['getArticle', groupId, articleId]);
    },
  });
};
