import PropTypes from 'prop-types';
import s from './Friend-list-item.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={s.item} key={id}>
            <span
              style={{ backgroundColor: isOnline ? 'blue' : 'red' }}
              className={s.status}
            ></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
