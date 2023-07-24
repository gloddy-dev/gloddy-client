import { GroupResponse } from './type';
import privateApi from '../config/privateApi';

export const getGroups = (pageNum: number) => {
  return privateApi<GroupResponse>(`/groups?size=5&page=${pageNum}`);
};
