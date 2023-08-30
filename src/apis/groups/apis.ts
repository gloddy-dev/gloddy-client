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
  GroupDetailResponse,
  GroupMembersResponse,
  GroupsResponse,
  Notice,
} from './type';

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
  return privateApi.get<ArticlesResponse>(`/groups/${groupId}/articles?size=5&page=${page}`);
};

export const getArticle = (groupId: number, articleId: number) => {
  return privateApi.get<Article>(`/groups/${groupId}/articles/${articleId}`);
};

export const postArticle = ({ groupId, article }: ArticleRequest) => {
  return privateApi.post<{ articleId: number }>(`/groups/${groupId}/article`, article);
};

export const deleteArticle = (groupId: number, articleId: number) => {
  return privateApi.delete(`/groups/${groupId}/articles/${articleId}`);
};

export const getComments = (groupId: number, articleId: number) => {
  return privateApi.get<CommentsReponse>(`/groups/${groupId}/articles/${articleId}/comments`);
};

export const postComment = ({ groupId, articleId, content }: CommentRequest) => {
  return privateApi.post(`/groups/${groupId}/articles/${articleId}/comment`, { content });
};

export const deleteComment = (groupId: number, articleId: number, commentId: number) => {
  return privateApi.delete(`/groups/${groupId}/articles/${articleId}/comments/${commentId}`);
};

export const getGroupMembers = (groupId: number) => {
  return privateApi.get<GroupMembersResponse>(`/groups/${groupId}/members`);
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

export const postScrap = (groupId: number) => {
  return privateApi.post(`/groups/${groupId}/scrap`);
};

export const deleteScrap = (groupId: number) => {
  return privateApi.delete(`/groups/${groupId}/scrap`);
};
