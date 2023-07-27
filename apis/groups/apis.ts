import { CreateGroupRequest, GroupResponse } from '.';
import privateApi from '../config/privateApi';

export const getGroups = (pageNum: number) => {
  return privateApi.get<GroupResponse>(`/groups?size=5&page=${pageNum}`);
};

export const postCreateGroup = (CreateGroupData: CreateGroupRequest) => {
  return privateApi.post('/group-create', CreateGroupData);
};
