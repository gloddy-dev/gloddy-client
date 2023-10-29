import { Keys, deleteMate, patchProfile, patchSignOut, postEmailVerify } from '.';
import useAppRouter from '@/hooks/useAppRouter';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePatchProfile = () => {
  const queryClient = useQueryClient();
  const { back } = useAppRouter();
  return useMutation(patchProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries(Keys.getProfile());
      back();
    },
  });
};

export const useDeleteMate = () => useMutation(deleteMate);

export const useEmailVerifyMutation = () => useMutation(postEmailVerify);

export const usePatchSignOut = () => {
  const queryClient = useQueryClient();

  return useMutation(() => {
    queryClient.clear();
    return patchSignOut();
  });
};
