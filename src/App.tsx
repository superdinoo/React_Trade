import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import AuctionPage from 'pages/AuctionPage/AuctionPage';
import UserPage from 'pages/UserPage/UserPage';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { setStartTime, updateTime, updateTurn } from 'redux/reducers/auctionSlice';
import './App.scss';

function App() {
  const { timeLeft, isComplete } = useAppSelector((state) => state.auction);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (!isComplete) {
      dispatch(updateTime());

      interval = setInterval(() => {
        dispatch(updateTime());

        if (timeLeft === 0) {
          dispatch(setStartTime());
          dispatch(updateTurn());
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isComplete]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AuctionPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
