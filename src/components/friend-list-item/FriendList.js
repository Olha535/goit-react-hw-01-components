// import PropTypes from 'prop-types';
import s from './Friend-list-item.module.css';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </ul>
  );
}

export default FriendList;
