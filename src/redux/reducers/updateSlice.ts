import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TURN_TIME } from 'constants/constants';
import { IUser } from 'types/interface';
import { USERS_DATA } from '../../constants/data';
import { UpdateState } from 'types/types';

const initialState: UpdateState = {
  users: USERS_DATA,
  startTime: Date.now(),
  timeLeft: TURN_TIME,
  turn: 0,
  isComplete: false,
};

const calcTimeLeft = (startTime: number) => {
  const currentTime = Date.now();
  const expireTime = startTime + TURN_TIME * 1000;
  const timeLeft = expireTime - currentTime;
  return Math.round(timeLeft / 1000);
};

export const updateSlice = createSlice({
  name: 'update',
  initialState,
  reducers: {
    setStartTime: (state) => {
      state.startTime = Date.now();
    },
    updateTime: (state) => {
      state.timeLeft = calcTimeLeft(state.startTime);
    },
    updateTurn: (state) => {
      if (state.turn < state.users.length - 1) {
        state.turn += 1;
      } else {
        state.turn = 0;
      }
    },
    updateStatus: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const user = state.users.find((item) => item.id === id) as IUser;
      user.isOnline = !user.isOnline;
    },
    completeAuction: (state) => {
      state.isComplete = true;
    },
  },
});

export const { setStartTime, updateTime, updateTurn, updateStatus, completeAuction } =
  updateSlice.actions;

export default updateSlice.reducer;
