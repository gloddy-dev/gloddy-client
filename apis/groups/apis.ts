import privateApi from '../config/privateApi';

import type { ArticlesResponse, CreateGroupRequest, GroupResponse, GroupsResponse } from './type';

export const getGroups = (pageNum: number) => {
  return privateApi.get<GroupsResponse>(`/groups?size=5&page=${pageNum}`);
};

export const getGroup = (groupId: number) => {
  return privateApi.get<GroupResponse>(`/groups/${groupId}`);
};

export const postCreateGroup = (CreateGroupData: CreateGroupRequest) => {
  return privateApi.post('/group-create', CreateGroupData);
};

export const getArticles = (groupId: number, page: number) => {
  return privateApi.get<ArticlesResponse>(`/groups/${groupId}/articles?size=5&page=${page}`);
};
