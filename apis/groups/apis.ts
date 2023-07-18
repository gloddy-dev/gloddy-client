import { privateApi } from '../config/privateApi.server';

export const getExample = () => {};

type GroupServerResponse = {
  totalCount: number;
  currentCount: number;
  currentPage: number;
  totalPage: number;
  contents: any[];
};

export const getGroupsServer = async () => {
  const data = await privateApi<GroupServerResponse>(`/api/v1/groups?size=5&page=5`);
  return data;
};
