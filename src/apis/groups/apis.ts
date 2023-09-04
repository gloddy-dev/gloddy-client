import privateApi from '../config/privateApi';

import type {
  AppliesResponse,
  ApplyRequest,
  ApplyResponse,
  Article,
  ArticleRequest,
  ArticlesResponse,
  CommentRequest,
  CommentsReponse,
  CreateGroupRequest,
  CreateGroupResponse,
  EstimateResponse,
  GroupDetailResponse,
  GroupMembersResponse,
  GroupsResponse,
  Notice,
} from '.';
import type { ApplyStatusType } from '@/types';

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
  return privateApi.post<{ articleId: number }>(`/groups/${groupId}/article`, article);
};

export const deleteArticle = (params: { groupId: number; articleId: number }) => {
  const { groupId, articleId } = params;
  return privateApi.delete(`/groups/${groupId}/articles/${articleId}`);
};

export const getComments = (groupId: number, articleId: number) => {
  return privateApi.get<CommentsReponse>(`/groups/${groupId}/articles/${articleId}/comments`);
};

export const postComment = ({ params: { groupId, articleId }, content }: CommentRequest) => {
  return privateApi.post(`/groups/${groupId}/articles/${articleId}/comment`, { content });
};

export const deleteComment = (params: {
  groupId: number;
  articleId: number;
  commentId: number;
}) => {
  const { groupId, articleId, commentId } = params;
  return privateApi.delete(`/groups/${groupId}/articles/${articleId}/comments/${commentId}`);
};

export const getGroupMembers = (groupId: number) => {
  return privateApi.get<GroupMembersResponse>(`/groups/${groupId}/members`);
};

export const deleteGroupMember = (params: { groupId: number }) => {
  const { groupId } = params;
  return privateApi.delete(`/groups/${groupId}/members`);
};

export const getNotice = (groupId: number) => {
  return privateApi.get<Notice[]>(`/groups/${groupId}/articles/notice`);
};

export const getApplies = (groupId: number) => {
  return privateApi.get<AppliesResponse>(`/groups/${groupId}/applies`);
};

export const postApply = ({ groupId, apply }: ApplyRequest) => {
  return privateApi.post<ApplyResponse>(`/groups/${groupId}/apply`, apply);
};

export const patchApply = (params: {
  groupId: number;
  applyId: number;
  status: ApplyStatusType;
}) => {
  const { groupId, applyId, status } = params;
  return privateApi.patch(`/groups/${groupId}/applies/${applyId}?status=${status}`);
};

export const postScrap = (params: { groupId: number }) => {
  const { groupId } = params;
  return privateApi.post(`/groups/${groupId}/scrap`);
};

export const deleteScrap = (params: { groupId: number }) => {
  const { groupId } = params;
  return privateApi.delete(`/groups/${groupId}/scrap`);
};

export const getEstimate = (groupId: number) =>
  privateApi.get<EstimateResponse>(`/groups/${groupId}/estimate`);
