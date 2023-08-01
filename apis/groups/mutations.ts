import { postCreateGroup } from './apis';
import { useMutation } from '@tanstack/react-query';

export const usePostCreateGroup = () => {
  return useMutation(postCreateGroup);
};
