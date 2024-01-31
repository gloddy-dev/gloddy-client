import { postFiles } from './apis';
import { useMutation } from '@tanstack/react-query';

export const usePostFiles = () => {
  return useMutation({ mutationFn: postFiles });
};
