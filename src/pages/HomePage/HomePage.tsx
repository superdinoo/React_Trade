import React from 'react';
import Table from '../../components/Table/Table';
import './HomePage.scss';
import { useNavigate } from 'react-router-dom';
import { completeAuction } from 'redux/reducers/updateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectInfo } from 'selectors/selectAll';

const HomePage = () => {
  const { isComplete } = useSelector(getSelectInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClose = () => {
    navigate(`/users`);
  };

  const onEnd = () => {
    dispatch(completeAuction());
  };

  return (
    <div className="homePageContainer">
      <header className="headerContainer">
        <h1 className="headerTitleWrapper">
          Ход торгов <b>Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2020 07:00)</b>
        </h1>
      </header>
      <main>
        <h3 className="mainTitle">
          Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в
          таблице:
        </h3>
        {isComplete && <p className="text">Торги завершены</p>}
        <Table />
        <div className="controlsButton">
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

export default HomePage;
