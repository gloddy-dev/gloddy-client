import { postCreateGroup } from '.';
import { useMutation } from '@tanstack/react-query';

export const usePostCreateGroup = () => {
  return useMutation(postCreateGroup, {});
};
