import { privateApi } from '../config/privateApi.server';

export const getExample = () => {};

export const getGroupsServer = async () => {
  const data = await privateApi('/api/v1/groups?size=5&page=5');
  return data;
};
