import { useMutation } from '@tanstack/react-query';

import { postCreateCommunityArticle } from '@/apis/community/apis';
import useAppRouter from '@/hooks/useAppRouter';

export const usePostCommunityArticle = () => {
  const { replace } = useAppRouter();

  return useMutation(postCreateCommunityArticle, {
    onSuccess: (data) => {
      console.log(data);
      replace('/');
    },
  });
};
