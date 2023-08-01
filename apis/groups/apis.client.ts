import privateApi from '../config/privateApi.client';

import type { CreateGroupRequest, GroupsResponse } from './type';

export const postCreateGroup = (CreateGroupData: CreateGroupRequest) => {
  return privateApi.post('/group-create', CreateGroupData);
};

export const getGroups = (pageNum: number) => {
  return privateApi.get<GroupsResponse>(`/groups?size=5&page=${pageNum}`);
};
