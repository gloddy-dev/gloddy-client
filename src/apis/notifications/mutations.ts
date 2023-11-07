import { postFCMToken } from './apis';
import { useMutation } from '@tanstack/react-query';

export const usePostFCMToken = () => {
  return useMutation(postFCMToken);
};
