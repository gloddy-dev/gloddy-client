import { postFiles } from './apis';
import { useMutation } from '@tanstack/react-query';

export const usePostFiles = () => {
  return useMutation({
    mutationFn: (fileList: FormData) => postFiles(fileList),
    onError: (error) => {
      // TODO : 파일 업로드 에러에 대한 처리
    },
  });
};
