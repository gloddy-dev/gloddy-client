import privateApi from '../config/privateApi';

import type {
  Article,
  ArticleRequest,
  ArticlesResponse,
  CommentsReponse,
  CreateGroupRequest,
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
  return privateApi.post('/group-create', CreateGroupData);
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

export const getComments = (groupId: number, articleId: number) => {
  return privateApi.get<CommentsReponse>(`/groups/${groupId}/articles/${articleId}/comments`);
};

export const getGroupMembers = (groupId: number) => {
  return privateApi.get<GroupMembersResponse>(`/groups/${groupId}/members`);
};

export const getNotice = (groupId: number) => {
  return privateApi.get<Notice[]>(`/groups/${groupId}/articles/notice`);
};
