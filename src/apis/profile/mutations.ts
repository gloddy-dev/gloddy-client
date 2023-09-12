import { Keys, deleteMate, patchProfile, postEmailVerify } from '.';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const usePatchProfile = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(patchProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries(Keys.getProfile());
      router.back();
    },
  });
};

export const useDeleteMate = () => useMutation(deleteMate);

export const useEmailVerifyMutation = () => useMutation(postEmailVerify);
