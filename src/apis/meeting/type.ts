import { Grouping } from '../groups';

/* 참여 중 */
export interface MeetingParticipatingResponse {
  groups: Array<{
    isNew: boolean;
    group: Grouping;
  }>;
}
export interface MeetingHostingResponse {
  groups: Array<{
    isExistNewApply: boolean;
    group: Grouping;
  }>;
}

/* 대기 중 */
export interface MeetingWaitingResponse {
  groups: Array<{ group: Grouping }>;
}

export interface MeetingRejectedResponse {
  groups: Array<{
    applyId: number;
    group: Grouping;
  }>;
}

/* 평가 */

export interface MeetingNotEstimatedResponse {
  groups: Array<{
    isCaptain: boolean;
    group: Grouping;
  }>;
}

/* 찜한 모임 */

export interface MeetingScrapResponse {
  totalCount: number;
  currentCount: number;
  currentPage: number;
  totalPage: number;
  contents: Grouping[];
}
