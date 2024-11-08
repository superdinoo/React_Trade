import { IUser } from './interface';

export type UpdateState = {
  users: IUser[];
  startTime: number;
  timeLeft: number;
  turn: number;
  isComplete: boolean;
};

export type TableProps = {
  data: IUser[];
};
