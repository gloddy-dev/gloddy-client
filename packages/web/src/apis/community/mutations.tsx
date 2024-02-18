import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  deleteCommunityCommentLike,
  postCommunityArticleLike,
  postCommunityCommentLike,
  postCreateCommunityArticle,
  postCreateCommunityComment,
  postCreateCommunityReply,
  postDeleteCommunityArticle,
} from '@/apis/community/apis';
import { Keys } from '@/apis/community/keys';
import { CommunityArticle } from '@/apis/community/type';
import { CommunityChannelMessage } from '@/app/[lng]/(main)/community/components/ContentSection.client';
import { useAppRouter, useBroadcastChannel } from '@/hooks';
import { getIsAndroid, getIsIOS } from '@/utils';

export const usePostCreateCommunityArticle = () => {
  const queryClient = useQueryClient();
  const { back } = useAppRouter();
  const { postMessage } = useBroadcastChannel<CommunityChannelMessage>('community');

  const isIOS = getIsIOS();
  const isAndroid = getIsAndroid();

  return useMutation({
    mutationFn: postCreateCommunityArticle,
    onSuccess: (data, variables) => {
      const { categoryId } = variables;

      if (isIOS || isAndroid) {
        postMessage({ categoryId: Number(categoryId) });
      } else {
        queryClient.invalidateQueries({ queryKey: Keys.getCommunityArticles(0) }); // 전체 카테고리
        queryClient.invalidateQueries({ queryKey: Keys.getCommunityArticles(categoryId) }); // 작성한 게시글 카테고리
      }
      back();
    },
  });
};

export const usePostCommunityArticleLike = (articleId: number, categoryId: number) => {
  const queryClient = useQueryClient();
  const { postMessage } = useBroadcastChannel<CommunityChannelMessage>('community');

  const isIOS = getIsIOS();
  const isAndroid = getIsAndroid();

  return useMutation({
    mutationFn: () => postCommunityArticleLike(articleId),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: Keys.getCommunityArticleDetail(articleId) });

      // 이전 상태를 저장
      const previousArticle = queryClient.getQueryData(Keys.getCommunityArticleDetail(articleId));

      // 낙관적 업데이트를 위해 쿼리 데이터를 즉시 변경
      queryClient.setQueryData(
        Keys.getCommunityArticleDetail(articleId),
        (oldData: CommunityArticle) => {
          return { ...oldData, article: { ...oldData.article, isLiked: true } };
        }
      );

      return { previousArticle };
    },
    // 에러가 발생하면 이전 상태로 되돌림
    onError: (error, variables, context) => {
      if (context?.previousArticle) {
        queryClient.setQueryData(
          Keys.getCommunityArticleDetail(articleId),
          context.previousArticle
        );
      } else throw new Error('No previous Data');
    },
    onSettled: () => {
      if (isIOS || isAndroid) {
        postMessage({ categoryId });
      } else {
        queryClient.invalidateQueries({ queryKey: Keys.getCommunityArticles(0) });
        queryClient.invalidateQueries({ queryKey: Keys.getCommunityArticles(categoryId) });
      }
      queryClient.invalidateQueries({ queryKey: Keys.getCommunityArticleDetail(articleId) });
    },
  });
};

export const usePostDeleteCommunityArticle = (articleId: number, categoryId: number) => {
  const queryClient = useQueryClient();
  const { back } = useAppRouter();
  const { postMessage } = useBroadcastChannel<CommunityChannelMessage>('community');

  const isIOS = getIsIOS();
  const isAndroid = getIsAndroid();

  return useMutation({
    mutationFn: () => postDeleteCommunityArticle(articleId),
    onSuccess: () => {
      if (isIOS || isAndroid) {
        postMessage({ categoryId });
      } else {
        queryClient.invalidateQueries({ queryKey: Keys.getCommunityArticles(categoryId) });
        queryClient.invalidateQueries({ queryKey: Keys.getCommunityArticles(0) });
      }
      back();
    },
  });
};

export const usePostCreateComment = (articleId: number, categoryId: number) => {
  const queryClient = useQueryClient();
  const { postMessage } = useBroadcastChannel<CommunityChannelMessage>('community');

  const isIOS = getIsIOS();
  const isAndroid = getIsAndroid();

  return useMutation({
    mutationFn: postCreateCommunityComment,
    onSuccess: () => {
      if (isIOS || isAndroid) {
        postMessage({ categoryId });
      } else {
        queryClient.invalidateQueries({ queryKey: Keys.getCommunityArticles(categoryId) });
        queryClient.invalidateQueries({ queryKey: Keys.getCommunityArticles(0) });
      }
      queryClient.invalidateQueries({ queryKey: Keys.getCommunityArticleDetail(articleId) });
      queryClient.invalidateQueries({ queryKey: Keys.getCommunityComments(articleId) });
    },
  });
};

export const usePostCommunityCommentLike = (articleId: number, commentId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postCommunityCommentLike(articleId, commentId),
    onMutate: async () => {
      // 이전 상태를 저장
      const previousArticle = queryClient.getQueryData(Keys.getCommunityComments(articleId));

      // 낙관적 업데이트를 위해 쿼리 데이터를 즉시 변경
      queryClient.setQueryData(
        Keys.getCommunityComments(articleId),
        (oldData: CommunityArticle) => {
          return { ...oldData, article: { ...oldData.article, isLiked: true } };
        }
      );

      return { previousArticle };
    },
    // 에러가 발생하면 이전 상태로 되돌림
    onError: (error, variables, context) => {
      if (context?.previousArticle) {
        queryClient.setQueryData(Keys.getCommunityComments(articleId), context.previousArticle);
      } else throw new Error('No previous Data');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: Keys.getCommunityComments(articleId) });
    },
  });
};

export const useDeleteCommunityComment = (
  articleId: number,
  commentId: number,
  categoryId: number
) => {
  const queryClient = useQueryClient();
  const { postMessage } = useBroadcastChannel<CommunityChannelMessage>('community');

  const isIOS = getIsIOS();
  const isAndroid = getIsAndroid();

  return useMutation({
    mutationFn: () => deleteCommunityCommentLike(articleId, commentId),
    onSuccess: () => {
      if (isIOS || isAndroid) {
        postMessage({ categoryId });
      }
      queryClient.invalidateQueries({ queryKey: Keys.getCommunityComments(articleId) });
    },
  });
};

export const useCreateCommunityReply = (articleId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCreateCommunityReply,
    onSuccess: (data, variables) => {
      const { params } = variables;
      queryClient.invalidateQueries({
        queryKey: Keys.getCommunityReply(articleId, params.commentId),
      });
      queryClient.invalidateQueries({ queryKey: Keys.getCommunityComments(articleId) });
    },
  });
};
