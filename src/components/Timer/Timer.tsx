import { getPadTime } from 'helpers/getPadTime';
import { useAppSelector } from 'hooks/hooks';
import React from 'react';
import style from './Timer.module.scss';

export const Timer = () => {
  const { timeLeft } = useAppSelector((state) => state.auction);

  const hours = getPadTime(Math.floor(timeLeft / 3600));
  const minutes = getPadTime(Math.floor((timeLeft / 60) % 60));
  const seconds = getPadTime(Math.floor(timeLeft % 60));

  return (
    <div className={style.timer}>
      <span>{hours}</span>
      <span>:</span>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </div>
  );
};

export default Timer;
