export type TimerType = 'DECREMENTAL' | 'INCREMENTAL';

export type TimerStatusType = 'RUNNING' | 'PAUSED' | 'STOPPED';

export type UseTimerProps = {
  autostart: boolean;
  endTime: number | null;
  initialStatus: TimerStatusType;
  initialTime: number;
  interval: number;
  onTimeOver?: () => void;
  onTimeUpdate?: (time: number) => void;
  step: number;
  timerType: TimerType;
};

export type ReturnType = {
  advanceTime: (timeToAdd: number) => void;
  pause: () => void;
  reset: () => void;
  start: () => void;
  status: TimerStatusType;
  time: number;
};

export interface TimeState {
  status: TimerStatusType;
  time: number;
  timerType: TimerType;
}
