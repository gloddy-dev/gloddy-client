import privateApi from '../config/privateApi.server';

import type { GroupResponse, GroupsResponse } from './type';

export const getGroups = (pageNum: number) => {
  return privateApi.get<GroupsResponse>(`/groups?size=5&page=${pageNum}`);
};

export const getGroup = (groupId: number) => {
  return privateApi.get<GroupResponse>(`/groups/${groupId}`);
};
