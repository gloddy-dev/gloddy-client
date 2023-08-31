import {
  getMeetingHosting,
  getMeetingNotEstimated,
  getMeetingParticipating,
  getMeetingRejected,
  getMeetingWaiting,
} from '.';
import { Keys } from './keys';
import { useSuspenseQueries, useSuspenseQuery } from '@suspensive/react-query';

export const useGetExample = () => {};

/* 참여 중 */
export const useGetMeetingParticipating = () =>
  useSuspenseQuery(Keys.getMeetingParticipating(), getMeetingParticipating);

export const useGetMeetingHosting = () =>
  useSuspenseQuery(Keys.getMeetingParticipating(), getMeetingParticipating);

/* 대기 중 */
export const useGetMeetingWaiting = () =>
  useSuspenseQuery(Keys.getMeetingParticipating(), getMeetingParticipating);

export const useGetMeetingRejected = () =>
  useSuspenseQuery(Keys.getMeetingParticipating(), getMeetingParticipating);

/* 평가 */
export const useGetMeetingNotEstimated = () =>
  useSuspenseQuery(Keys.getMeetingParticipating(), getMeetingParticipating);

/* 전체 */
export const useGetMeeting = () =>
  useSuspenseQueries({
    queries: [
      { queryKey: Keys.getMeetingParticipating(), queryFn: getMeetingParticipating },
      {
        queryKey: Keys.getMeetingHosting(),
        queryFn: getMeetingHosting,
      },
      {
        queryKey: Keys.getMeetingWaiting(),
        queryFn: getMeetingWaiting,
      },
      {
        queryKey: Keys.getMeetingRejected(),
        queryFn: getMeetingRejected,
      },
      {
        queryKey: Keys.getMeetingNotEstimated(),
        queryFn: getMeetingNotEstimated,
      },
    ],
  });
