import Timer from 'components/Timer/Timer';
import { useAppSelector } from 'hooks/hooks';
import React from 'react';
import { IUser } from 'types/types';
import style from './Table.module.scss';

type TableProps = {
  data: IUser[];
};

export const Table = ({ data }: TableProps) => {
  const { turn } = useAppSelector((state) => state.auction);

  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead>
          <tr>
            <th scope="col" className={style.colHead}>
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
            <th scope="col" className={style.colHead}>
              Параметры и требования
            </th>
            {data.map((item, index) => (
              <th scope="col" key={index} className={style.colHead}>
                Участник №{index + 1}
                <span className={`${style.status} ${item.isOnline ? style.online : null}`}></span>
              </th>
            ))}
          </tr>
          <tr>
            <th scope="row" className={style.rowHead}>
              Наличие комплекса мероприятий, повышающих стандарты качества изготовления
            </th>
            {data.map((item, index) => (
              <td key={index}>{item.activities}</td>
            ))}
          </tr>
          <tr>
            <th scope="row" className={style.rowHead}>
              Срок изготовления лота, дней
            </th>
            {data.map((item, index) => (
              <td key={index}>{item.productionTime}</td>
            ))}
          </tr>
          <tr>
            <th scope="row" className={style.rowHead}>
              Гарантийные обязательства, мес
            </th>
            {data.map((item, index) => (
              <td key={index}>{item.warranties}</td>
            ))}
          </tr>
          <tr>
            <th scope="row" className={style.rowHead}>
              Условия оплаты, %
            </th>
            {data.map((item, index) => (
              <td key={index}>{item.paymentTerms}%</td>
            ))}
          </tr>
          <tr>
            <th scope="row" className={style.rowHead}>
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
