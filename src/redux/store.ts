import { configureStore } from '@reduxjs/toolkit';
import updateReducer from './reducers/updateSlice';

export const store = configureStore({
  reducer: {
    updateDate: updateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
