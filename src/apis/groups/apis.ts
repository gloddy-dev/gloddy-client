import privateApi from '../config/privateApi';

import type {
  AppliesResponse,
  Apply,
  ApplyRequest,
  ApplyStatusRequest,
  Article,
  ArticleDeleteRequest,
  ArticleRequest,
  ArticlesResponse,
  Comment,
  CommentDeleteRequest,
  CommentRequest,
  CommentsReponse,
  CreateGroupRequest,
  CreateGroupResponse,
  EstimateResponse,
  GroupDetailResponse,
  GroupMembersDeleteRequest,
  GroupMembersResponse,
  GroupsResponse,
  NoticesResponse,
  ScrapRequest,
} from '.';

export const getGroups = (page: number) => {
  return privateApi.get<GroupsResponse>(`/groups?size=5&page=${page}`);
};

export const getGroupDetail = (groupId: number) => {
  return privateApi.get<GroupDetailResponse>(`/groups/${groupId}`);
};

export const postCreateGroup = (CreateGroupData: CreateGroupRequest) => {
  return privateApi.post<CreateGroupResponse>('/group-create', CreateGroupData);
};

export const getArticles = (groupId: number, page: number) => {
  return privateApi.get<ArticlesResponse>(`/groups/${groupId}/articles?size=40&page=${page}`);
};

export const getArticle = (groupId: number, articleId: number) => {
  return privateApi.get<Article>(`/groups/${groupId}/articles/${articleId}`);
};

export const postArticle = ({ params: { groupId }, article }: ArticleRequest) => {
  return privateApi.post<Pick<Article, 'articleId'>>(`/groups/${groupId}/article`, article);
};

export const deleteArticle = ({ params: { groupId, articleId } }: ArticleDeleteRequest) => {
  return privateApi.delete(`/groups/${groupId}/articles/${articleId}`);
};

export const getComments = (groupId: number, articleId: number) => {
  return privateApi.get<CommentsReponse>(`/groups/${groupId}/articles/${articleId}/comments`);
};

export const postComment = ({ params: { groupId, articleId }, payload }: CommentRequest) => {
  return privateApi.post<Pick<Comment, 'commentId'>>(
    `/groups/${groupId}/articles/${articleId}/comment`,
    payload
  );
};

export const deleteComment = ({
  params: { groupId, articleId, commentId },
}: CommentDeleteRequest) => {
  return privateApi.delete(`/groups/${groupId}/articles/${articleId}/comments/${commentId}`);
};

export const getGroupMembers = (groupId: number) => {
  return privateApi.get<GroupMembersResponse>(`/groups/${groupId}/members`);
};

export const deleteGroupMember = ({ params: { groupId } }: GroupMembersDeleteRequest) => {
  return privateApi.delete(`/groups/${groupId}/members`);
};

export const getNotices = (groupId: number) => {
  return privateApi.get<NoticesResponse>(`/groups/${groupId}/articles/notice`);
};

export const getApplies = (groupId: number) => {
  return privateApi.get<AppliesResponse>(`/groups/${groupId}/applies`);
};

export const postApply = ({ params: { groupId }, apply }: ApplyRequest) => {
  return privateApi.post<Pick<Apply, 'applyId'>>(`/groups/${groupId}/apply`, apply);
};

export const patchApply = ({ params: { groupId, applyId, status } }: ApplyStatusRequest) => {
  return privateApi.patch(`/groups/${groupId}/applies/${applyId}?status=${status}`);
};

export const postScrap = ({ params: { groupId } }: ScrapRequest) => {
  return privateApi.post(`/groups/${groupId}/scrap`);
};

export const deleteScrap = ({ params: { groupId } }: ScrapRequest) => {
  return privateApi.delete(`/groups/${groupId}/scrap`);
};

export const getEstimate = (groupId: number) =>
  privateApi.get<EstimateResponse>(`/groups/${groupId}/estimate`);
