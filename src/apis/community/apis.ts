import {
  CreateArticleRequest,
  CreateArticleResponse,
  CreateCommentRequest,
  CreateReplyRequest,
  GetArticleDetail,
  GetArticlesRequest,
  GetArticlesResponse,
  GetCommunityCommentsResponse,
  GetReplyResponse,
} from '@/apis/community/type';
import privateApi from '@/apis/config/privateApi';

export const getCommunityArticles = ({ categoryId, pageParam }: GetArticlesRequest) => {
  return privateApi.get<GetArticlesResponse>(
    categoryId
      ? `/communities/articles?categoryId=${categoryId}&page=${pageParam}`
      : `/communities/articles?page=${pageParam}`
  );
};

export const getCommunityArticleDetail = (articleId: number) => {
  return privateApi.get<GetArticleDetail>(`/communities/articles/${articleId}`);
};

export const postCreateCommunityArticle = (CreateCommunityData: CreateArticleRequest) => {
  return privateApi.post<CreateArticleResponse>(
    '/communities/articles/create',
    CreateCommunityData
  );
};

export const postCommunityArticleLike = (articleId: number) => {
  return privateApi.post(`/communities/articles/${articleId}/like`);
};

export const postDeleteCommunityArticle = (articleId: number) => {
  return privateApi.post(`/communities/articles/${articleId}/delete`);
};

export const getCommunityComments = (articleId: number) => {
  return privateApi.get<GetCommunityCommentsResponse>(
    `/communities/articles/${articleId}/comments`
  );
};

export const postCreateCommunityComment = ({
  params: { articleId },
  payload,
}: CreateCommentRequest) => {
  return privateApi.post(`/communities/articles/${articleId}/comments`, payload);
};

export const postCommunityCommentLike = (articleId: number, commentId: number) => {
  return privateApi.post(`/communities/articles/${articleId}/comments/${commentId}/like`);
};

export const deleteCommunityCommentLike = (articleId: number, commentId: number) => {
  return privateApi.delete(`/communities/articles/${articleId}/comments/${commentId}`);
};

export const getCommunityReply = (articleId: number, commentId: number) => {
  return privateApi.get<GetReplyResponse>(
    `/communities/articles/${articleId}/comments/${commentId}/child`
  );
};

export const postCreateCommunityReply = ({
  params: { articleId, commentId },
  payload,
}: CreateReplyRequest) => {
  return privateApi.post(`/communities/articles/${articleId}/comments/${commentId}/child`, payload);
};
