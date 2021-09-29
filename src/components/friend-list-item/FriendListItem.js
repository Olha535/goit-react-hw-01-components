import PropTypes from 'prop-types';
import s from './Friend-list-item.module.css';

function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
