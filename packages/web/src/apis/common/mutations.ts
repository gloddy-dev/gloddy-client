import { useMutation } from '@tanstack/react-query';

import { postFiles } from './apis';

export const usePostFiles = () => {
  return useMutation({ mutationFn: postFiles });
};
