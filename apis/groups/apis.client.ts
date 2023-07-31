import privateApi from '../config/privateApi.client';

import type { CreateGroupRequest } from './type';

export const postCreateGroup = (CreateGroupData: CreateGroupRequest) => {
  return privateApi.post('/group-create', CreateGroupData);
};
