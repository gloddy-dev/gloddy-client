import { GroupResponse } from '.';
import privateApi from '../config/privateApi';

export const getGroups = (pageNum: number) => {
  return privateApi<GroupResponse>(`/groups?size=5&page=${pageNum}`);
};
