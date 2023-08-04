import { CreateGroupRequest } from '@/apis/groups/type';

import type { TimeType } from '@/types';

export interface CreateGroupContextValue
  extends Omit<CreateGroupRequest, 'meetDate' | 'startTime' | 'endTime'> {
  date: Date;
  time: TimeType;
}

export type ModalNameType = 'meetingDate' | 'meetingLocation' | 'meetingNumber';
