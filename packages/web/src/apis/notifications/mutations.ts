import { useMutation } from '@tanstack/react-query';

import { postFCMToken } from './apis';

export const usePostFCMToken = () => {
  return useMutation({ mutationFn: postFCMToken });
};
