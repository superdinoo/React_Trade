import React from 'react';
import Timer from 'components/Timer/Timer';
import './Table.scss';
import { useSelector } from 'react-redux';
import { selectTurn, selectUsers } from '../../selectors/selectAll';

const Table = () => {
  const { turn } = useSelector(selectTurn);
  const data = useSelector(selectUsers);
  if (!data) {
    return <div>Данные отсутсвуют</div>;
  }
  return (
    <div className="containerTable">
      <table className="tableAll">
        <thead>
          <tr>
            <th scope="col" className="colHead">
              Ход
            </th>
            {new Array(data.length).fill(0).map((_, index) =>
              index === turn ? (
                <th scope="col" key={index}>
                  <Timer />
                </th>
              ) : (
                <th key={index}></th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="col" className="colHead">
              Параметры и требования
            </th>
            {data.map((item, index) => (
              <th scope="col" key={index} className="colHead">
                Участник №{index + 1}
                <span className={`${'statusUser'} ${item.isOnline ? 'online' : null}`}></span>
              </th>
            ))}
          </tr>
          <tr>
            <th scope="row" className="rowHead">
              Наличие комплекса мероприятий, повышающих стандарты качества изготовления
            </th>
            {data.map((item, index) => (
              <td key={index}>{item.activities}</td>
            ))}
          </tr>
          <tr>
            <th scope="row" className="rowHead">
              Срок изготовления лота, дней
            </th>
            {data.map((item, index) => (
              <td key={index}>{item.productionTime}</td>
            ))}
          </tr>
          <tr>
            <th scope="row" className="rowHead">
              Гарантийные обязательства, мес
            </th>
            {data.map((item, index) => (
              <td key={index}>{item.warranties}</td>
            ))}
          </tr>
          <tr>
            <th scope="row" className="rowHead">
              Условия оплаты, %
            </th>
            {data.map((item, index) => (
              <td key={index}>{item.paymentTerms}%</td>
            ))}
          </tr>
          <tr>
            <th scope="row" className="rowHead">
              Стоимость изготовления лота, руб. (без НДС)
            </th>
            {data.map((item, index) => (
              <td key={index}>
                {(+item.cost).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
