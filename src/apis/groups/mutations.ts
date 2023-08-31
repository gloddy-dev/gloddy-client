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
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import type { ApplyStatusType } from '@/types';

export const usePostCreateGroup = () => {
  const router = useRouter();

  return useMutation(postCreateGroup, {
    onSuccess: (data) => {
      router.push(`/grouping/${data.groupId}`);
    },
  });
};

export const usePostArticle = (groupId: number) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(postArticle, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['getArticles', groupId]);
      router.push(`/grouping/${groupId}/articles/${data.articleId}`);
    },
  });
};

export const useDeleteArticle = (groupId: number, articleId: number) => {
  const queryClient = useQueryClient();

  return useMutation(() => deleteArticle(groupId, articleId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['getArticles', groupId]);
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

export const useDeleteComment = (groupId: number, articleId: number, commentId: number) => {
  const queryClient = useQueryClient();

  return useMutation(() => deleteComment(groupId, articleId, commentId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['getComments', groupId, articleId]);
      queryClient.invalidateQueries(['getArticle', groupId, articleId]);
    },
  });
};

export const usePostApply = () => {
  const router = useRouter();

  return useMutation(postApply, {
    onSuccess: () => {
      router.push('/meeting?tab=waiting');
    },
  });
};

export const usePatchApply = (groupId: number, applyId: number, status: ApplyStatusType) => {
  const queryClient = useQueryClient();

  return useMutation(() => patchApply(groupId, applyId, status), {
    onSuccess: () => {
      queryClient.invalidateQueries(['getApplies', groupId]);
    },
  });
};

export const usePostScrap = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation(() => postScrap(groupId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['getGroupDetail', groupId]);
    },
  });
};

export const useDeleteScrap = (groupId: number) => {
  const queryClient = useQueryClient();

  return useMutation(() => deleteScrap(groupId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['getGroupDetail', groupId]);
    },
  });
};
