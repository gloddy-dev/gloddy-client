import { useRouter } from 'next/navigation';
import { postArticle, postCreateGroup } from './apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';

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
