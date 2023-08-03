import privateApi from '../config/privateApi';

import type {
  ArticlesResponse,
  CreateGroupRequest,
  GroupDetailResponse,
  GroupsResponse,
} from './type';

export const getGroups = (pageNum: number) => {
  return privateApi.get<GroupsResponse>(`/groups?size=5&page=${pageNum}`);
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
