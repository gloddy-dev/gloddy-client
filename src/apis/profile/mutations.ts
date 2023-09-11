import { Keys } from '.';
import { deleteMate, patchProfile } from './apis';
import { UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query';
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

export const useDeleteMate = (
  options: Pick<
    UseMutationOptions<
      Awaited<ReturnType<typeof deleteMate>>,
      unknown,
      Parameters<typeof deleteMate>[0]
    >,
    'onSuccess'
  >
) => useMutation(deleteMate, options);
