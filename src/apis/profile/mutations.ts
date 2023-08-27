import { patchProfile } from './apis';
import { useMutation } from '@tanstack/react-query';

export const usePatchProfile = () => {
  return useMutation(patchProfile);
};
