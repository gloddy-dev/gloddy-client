export type TimerType = 'DECREMENTAL' | 'INCREMENTAL';

export type TimerStatus = 'RUNNING' | 'PAUSED' | 'STOPPED';

export type Config = {
  autostart: boolean;
  endTime: number | null;
  initialStatus: TimerStatus;
  initialTime: number;
  interval: number;
  onTimeOver?: () => void;
  onTimeUpdate?: (time: number) => void;
  step: number;
  timerType: TimerType;
};

export type ReturnValue = {
  advanceTime: (timeToAdd: number) => void;
  pause: () => void;
  reset: () => void;
  start: () => void;
  status: TimerStatus;
  time: number;
};

export interface State {
  status: TimerStatus;
  time: number;
  timerType: TimerType;
}
