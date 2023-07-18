import { privateApi } from '../config/privateApi.server';
import axios from 'axios';

export const getExample = () => {};

export const getGroups = async () => {
  const data = await privateApi('/api/v1/groups?size=5&page=5');
  return data;
};
