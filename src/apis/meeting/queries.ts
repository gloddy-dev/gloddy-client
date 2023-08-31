import {
  getMeetingHosting,
  getMeetingNotEstimated,
  getMeetingParticipating,
  getMeetingRejected,
  getMeetingWaiting,
} from '.';
import { Keys } from './keys';
import { useSuspenseQuery } from '@suspensive/react-query';

export const useGetExample = () => {};

/* 참여 중 */
export const useGetMeetingParticipating = () =>
  useSuspenseQuery(Keys.getMeetingParticipating(), getMeetingParticipating);

export const useGetMeetingHosting = () => useSuspenseQuery(Keys.getMeetingHosting(), getMeetingHosting);

/* 대기 중 */
export const useGetMeetingWaiting = () => useSuspenseQuery(Keys.getMeetingWaiting(), getMeetingWaiting);

export const useGetMeetingRejected = () => useSuspenseQuery(Keys.getMeetingRejected(), getMeetingRejected);

/* 평가 */
export const useGetMeetingNotEstimated = () =>
  useSuspenseQuery(Keys.getMeetingNotEstimated(), getMeetingNotEstimated);
