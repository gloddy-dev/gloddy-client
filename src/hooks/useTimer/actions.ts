import { createAction } from './helpers';

const ADVANCE_TIME = (timeToAdd: number) => createAction('advanceTime', { timeToAdd });

const PAUSE = () => createAction('pause');

const RESET = (initialTime: number) => createAction('reset', { initialTime });

const SET = (newTime: number) => createAction('set', { newTime });

const START = (initialTime: number) => createAction('start', { initialTime });

const STOP = () => createAction('stop');

export type TimerActionsType = ReturnType<
  typeof ADVANCE_TIME | typeof PAUSE | typeof RESET | typeof SET | typeof START | typeof STOP
>;
