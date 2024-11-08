import React from 'react';
import { getTime } from 'helpers/getTime';
import './Timer.scss';
import { useSelector } from 'react-redux';
import { selectTimeLeft } from '../../selectors/selectAll';

const Timer = () => {
  const { timeLeft } = useSelector(selectTimeLeft);

  const hours = getTime(Math.floor(timeLeft / 3600));
  const minutes = getTime(Math.floor((timeLeft / 60) % 60));
  const seconds = getTime(Math.floor(timeLeft % 60));

  return (
    <div className="timerContainer">
      <span>{hours}</span>
      <span>:</span>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </div>
  );
};

export default Timer;
