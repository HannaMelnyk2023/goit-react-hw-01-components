import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem'

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
          {friends.map(friend => (
              <FriendListItem key={friend.id} friend={friend} />
          

        //       (({ id, avatar, name, isOnline }) => (
        // <li key={id} className={css.item}>
        //   <span className={isOnline ? css.onLine : css.offLine}></span>
        //   <img
        //     src={avatar}
        //     alt="User avatar"
        //     className={css.avatar}
        //     width="48"
        //   />
        //   <p className={css.name}>{name}</p>
        // </li>
      ))}
    </ul>
  );
}

// PropTypes
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    //   avatar: PropTypes.string.isRequired,
    //   name: PropTypes.string.isRequired,
    //   isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
