import { useMutation } from '@tanstack/react-query';
import { postCreateGroup } from './apis.client';

export const usePostCreateGroup = () => {
  return useMutation(postCreateGroup, {});
};
