import privateApi from '../config/privateApi';

type GroupResponse = {
  totalCount: number;
  currentCount: number;
  currentPage: number;
  totalPage: number;
  contents: any[];
};

export const getGroups = async (pageNum: number) => {
  const data = await privateApi<GroupResponse>(`/api/v1/groups?size=5&page=${pageNum}`);
  return data;
};
