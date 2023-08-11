import { postFiles } from './apis';
import { useMutation } from '@tanstack/react-query';

export const usePostFiles = () => {
  return useMutation(postFiles, {
    onError: (error) => {
      // TODO : 파일 업로드 에러에 대한 처리
    },
  });
};
