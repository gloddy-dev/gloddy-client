import { postFCMToken, postFiles } from './apis';
import { useMutation } from '@tanstack/react-query';

export const usePostFiles = () => {
  return useMutation(postFiles);
};

export const usePostFCMToken = () => {
  return useMutation(postFCMToken);
};
