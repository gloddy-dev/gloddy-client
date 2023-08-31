import { Grouping } from '../groups';

export interface MeetingWaitingResponse {
  groups: Array<{ group: Partial<Grouping> }>;
}

export interface MeetingRejectedResponse {
  groups: Array<{
    applyId: number;
    group: Partial<Grouping>;
  }>;
}
export interface MeetingParticipatingResponse {
  groups: Array<{
    isNew: boolean;
    group: Partial<Grouping>;
  }>;
}
export interface MeetingNotEstimatedResponse {
  groups: Array<{
    isCaptain: boolean;
    group: Partial<Grouping>;
  }>;
}
export interface MeetingHostingResponse {
  groups: Array<{
    isExistNewApply: boolean;
    group: Partial<Grouping>;
  }>;
}
