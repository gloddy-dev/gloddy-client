import { deleteMate, patchProfile } from './apis';
import { useMutation } from '@tanstack/react-query';

export const usePatchProfile = () => {
  return useMutation(patchProfile);
};

export const useDeleteMate = () => {
  return useMutation(deleteMate);
};
