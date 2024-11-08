import React from 'react';
import './UserPage.scss';
import { useNavigate } from 'react-router-dom';
import { updateStatus } from 'redux/reducers/updateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'selectors/selectAll';

const UserPage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const handleChange = (id: string) => {
    dispatch(updateStatus({ id }));
  };

  return (
    <div className="containerUser">
      <h2 className="titleUser">Текущие торги</h2>
      <div className="users">
        <h3 className="subtitle">Участники торгов</h3>
        <ul>
          {users.map((item, index) => (
            <li key={item.id}>
              <label>
                Участник {index + 1}
                <input
                  name="user"
                  type="checkbox"
                  checked={item.isOnline}
                  onChange={() => handleChange(item.id ?? '')}
                />
              </label>
            </li>
          ))}
        </ul>
        <button className="btn btnBlue" onClick={handleClick}>
          Ход торгов
        </button>
      </div>
    </div>
  );
};

export default UserPage;
