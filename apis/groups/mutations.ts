import { postCreateGroup } from './apis.client';
import { useMutation } from '@tanstack/react-query';

export const usePostCreateGroup = () => {
  return useMutation(postCreateGroup, {});
};
