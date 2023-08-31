import {
  MeetingHostingResponse,
  MeetingNotEstimatedResponse,
  MeetingParticipatingResponse,
  MeetingRejectedResponse,
  MeetingWaitingResponse,
} from '.';
import privateApi from '../config/privateApi';

export const getMeetingWaiting = () =>
  privateApi.get<MeetingWaitingResponse>('/users/groups/waiting');

export const getMeetingRejected = () =>
  privateApi.get<MeetingRejectedResponse>('/users/groups/rejected');

export const getMeetingParticipating = () =>
  privateApi.get<MeetingParticipatingResponse>('/users/groups/participating');

export const getMeetingNotEstimated = () =>
  privateApi.get<MeetingNotEstimatedResponse>('/users/groups/notEstimated');

export const getMeetingHosting = () =>
  privateApi.get<MeetingHostingResponse>('/users/groups/hoisting');
