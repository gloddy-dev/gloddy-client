import { Grouping } from '../groups';

/* 참여 중 */
export interface MeetingParticipatingResponse {
  groups: Array<{
    isNew: boolean;
    group: Partial<Grouping>;
  }>;
}
export interface MeetingHostingResponse {
  groups: Array<{
    isExistNewApply: boolean;
    group: Partial<Grouping>;
  }>;
}

/* 대기 중 */
export interface MeetingWaitingResponse {
  groups: Array<{ group: Partial<Grouping> }>;
}

export interface MeetingRejectedResponse {
  groups: Array<{
    applyId: number;
    group: Partial<Grouping>;
  }>;
}

/* 평가 */

export interface MeetingNotEstimatedResponse {
  groups: Array<{
    isCaptain: boolean;
    group: Partial<Grouping>;
  }>;
}
