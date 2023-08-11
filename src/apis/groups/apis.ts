import privateApi from '../config/privateApi';

import type {
  Article,
  ArticlesResponse,
  CommentsReponse,
  CreateGroupRequest,
  GroupDetailResponse,
  GroupsResponse,
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

export const getComments = (groupId: number, articleId: number) => {
  return privateApi.get<CommentsReponse>(`/groups/${groupId}/articles/${articleId}/comments`);
};
