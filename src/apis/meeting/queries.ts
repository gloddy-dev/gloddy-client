import {
  getMeetingHosting,
  getMeetingNotEstimated,
  getMeetingParticipating,
  getMeetingRejected,
  getMeetingScrap,
  getMeetingWaiting,
} from '.';
import { Keys } from './keys';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useGetExample = () => {};

/* 참여 중 */
export const useGetMeetingParticipating = () =>
  useSuspenseQuery({ queryKey: Keys.getMeetingParticipating(), queryFn: getMeetingParticipating });

export const useGetMeetingHosting = () =>
  useSuspenseQuery({ queryKey: Keys.getMeetingHosting(), queryFn: getMeetingHosting });

/* 대기 중 */
export const useGetMeetingWaiting = () =>
  useSuspenseQuery({ queryKey: Keys.getMeetingWaiting(), queryFn: getMeetingWaiting });

export const useGetMeetingRejected = () =>
  useSuspenseQuery({ queryKey: Keys.getMeetingRejected(), queryFn: getMeetingRejected });

/* 평가 */
export const useGetMeetingNotEstimated = () =>
  useSuspenseQuery({ queryKey: Keys.getMeetingNotEstimated(), queryFn: getMeetingNotEstimated });

/* 찜한 모임 */

export const useGetMeetingScrap = () =>
  useSuspenseQuery({ queryKey: Keys.getMeetingScraps(), queryFn: getMeetingScrap });
