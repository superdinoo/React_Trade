import React from 'react';
import Table from '../../components/Table/Table';
import style from './AuctionPage.module.scss';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { completeAuction } from 'redux/reducers/auctionSlice';

export const AuctionPage = () => {
  const { users, isComplete } = useAppSelector((state) => state.auction);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onClose = () => {
    navigate(`/users`);
  };

  const onEnd = () => {
    dispatch(completeAuction());
  };

  return (
    <div className={style.auctionPage}>
      <header className={style.header}>
        <h1 className={style.headerTitle}>
          Ход торгов <b>Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2020 07:00)</b>
        </h1>
      </header>
      <main>
        <h3 className={style.mainTitle}>
          Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в
          таблице:
        </h3>
        {isComplete && <p className={style.text}>Торги завершены</p>}
        <Table data={users} />
        <div className={style.controls}>
          <button onClick={onClose} className="btn btnGreen">
            Закрыть
          </button>
          <button onClick={onEnd} className="btn btnRed">
            Завершить торги
          </button>
        </div>
      </main>
    </div>
  );
};

export default AuctionPage;
