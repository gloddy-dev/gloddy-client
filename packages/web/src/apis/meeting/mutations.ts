import { postMeetingRejected } from '.';
import { useMutation } from '@tanstack/react-query';

export const usePostApply = () => useMutation({ mutationFn: postMeetingRejected });
