import { createSelector } from '@reduxjs/toolkit';
import { UpdateState } from 'types/types';

export const selectTurn = (state: { updateDate: { turn: number } }) => ({
  turn: state.updateDate.turn,
});
export const selectTimeLeft = (state: { updateDate: { timeLeft: number } }) => ({
  timeLeft: state.updateDate.timeLeft,
});
export const selectUsers = (state: { updateDate: UpdateState }) => state.updateDate.users;
export const selectComplete = (state: { updateDate: { isComplete: boolean } }) =>
  state.updateDate.isComplete;

export const getSelectInfo = createSelector(
  [selectTurn, selectTimeLeft, selectUsers, selectComplete],
  (turn, timeLeft, users, isComplete) => ({
    turn,
    timeLeft,
    users,
    isComplete,
  })
);
