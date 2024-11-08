import React, { useEffect } from 'react';
import HomePage from 'pages/HomePage/HomePage';
import UserPage from 'pages/UserPage/UserPage';
import { Route, Routes } from 'react-router-dom';
import { setStartTime, updateTime, updateTurn } from 'redux/reducers/updateSlice';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectInfo } from 'selectors/selectAll';

const App = () => {
  const { timeLeft, isComplete } = useSelector(getSelectInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (!isComplete) {
      dispatch(updateTime());

      interval = setInterval(() => {
        dispatch(updateTime());

        if (timeLeft.timeLeft === 0) {
          dispatch(setStartTime());
          dispatch(updateTurn());
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isComplete, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </>
  );
};

export default App;
