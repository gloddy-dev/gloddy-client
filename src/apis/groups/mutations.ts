import { postArticle, postCreateGroup } from './apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostCreateGroup = () => {
  return useMutation(postCreateGroup);
};

export const usePostArticle = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation(postArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries(['getArticles', groupId]);
    },
  });
};
