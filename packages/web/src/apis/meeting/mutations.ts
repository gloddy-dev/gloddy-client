import { useMutation } from '@tanstack/react-query';

import { postMeetingRejected } from '.';

export const usePostApply = () => useMutation({ mutationFn: postMeetingRejected });
