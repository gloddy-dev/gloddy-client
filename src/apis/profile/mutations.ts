import { Keys, deleteMate, patchProfile, patchSignOut, postEmailVerify } from '.';
import useAppRouter from '@/hooks/useAppRouter';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePatchProfile = () => {
  const queryClient = useQueryClient();
  const { back } = useAppRouter();
  return useMutation({
    mutationFn: patchProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: Keys.getProfile() });
      back();
    },
  });
};

export const useDeleteMate = () => useMutation({ mutationFn: deleteMate });

export const useEmailVerifyMutation = () => useMutation({ mutationFn: postEmailVerify });

export const usePatchSignOut = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      queryClient.clear();
      return patchSignOut();
    },
  });
};
