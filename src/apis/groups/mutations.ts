import {
  deleteArticle,
  deleteComment,
  deleteScrap,
  patchApply,
  postApply,
  postArticle,
  postComment,
  postCreateGroup,
  postScrap,
} from './apis';
import { Keys } from './keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const usePostCreateGroup = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(postCreateGroup, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([Keys.getGroupDetail, data.groupId]);
      router.push(`/grouping/${data.groupId}`);
    },
  });
};

export const usePostArticle = (groupId: number) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(postArticle, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([Keys.getArticles, groupId]);
      queryClient.invalidateQueries([Keys.getNotice, groupId]);
      router.push(`/grouping/${groupId}/articles/${data.articleId}`);
    },
  });
};

export const useDeleteArticle = (groupId: number, articleId: number) => {
  const queryClient = useQueryClient();

  return useMutation(() => deleteArticle(groupId, articleId), {
    onSuccess: () => {
      queryClient.invalidateQueries([Keys.getArticles, groupId]);
      queryClient.invalidateQueries([Keys.getNotice, groupId]);
    },
  });
};

export const usePostComment = (groupId: number, articleId: number) => {
  const queryClient = useQueryClient();

  return useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries([Keys.getComments, groupId, articleId]);
      queryClient.invalidateQueries([Keys.getArticle, groupId, articleId]);
    },
  });
};

export const useDeleteComment = (groupId: number, articleId: number, commentId: number) => {
  const queryClient = useQueryClient();

  return useMutation(() => deleteComment(groupId, articleId, commentId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['getComments', groupId, articleId]);
      queryClient.invalidateQueries(['getArticle', groupId, articleId]);
    },
  });
};

export const usePostApply = (groupId: number) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(postApply, {
    onSuccess: () => {
      queryClient.invalidateQueries([Keys.getGroupDetail, groupId]);
      queryClient.invalidateQueries([Keys.getGroupMembers, groupId]);
      router.push('/meeting/participate?tab=waiting');
    },
  });
};

export const usePatchApply = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation(patchApply, {
    onSuccess: () => {
      queryClient.invalidateQueries(['getApplies', groupId]);
      queryClient.invalidateQueries([Keys.getGroupDetail, groupId]);
      queryClient.invalidateQueries([Keys.getGroupMembers, groupId]);
    },
  });
};

export const usePostScrap = (groupId: number) => {
  return useMutation(() => postScrap(groupId));
};

export const useDeleteScrap = (groupId: number) => {
  return useMutation(() => deleteScrap(groupId));
};
