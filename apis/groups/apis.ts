import privateApi from '../config/privateApi';

import type { CreateGroupRequest, GroupResponse, GroupsResponse } from './type';

export const getGroups = (pageNum: number) => {
  return privateApi.get<GroupsResponse>(`/groups?size=5&page=${pageNum}`);
};

export const getGroup = (groupId: number) => {
  return privateApi.get<GroupResponse>(`/groups/${groupId}`);
};

export const postCreateGroup = (CreateGroupData: CreateGroupRequest) => {
  return privateApi.post('/group-create', CreateGroupData);
};
