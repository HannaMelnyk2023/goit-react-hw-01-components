import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({
  friend: { avatar, name, isOnline },
}) {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${isOnline ? css.onLine : css.offLine}`}></span>
      <img src={avatar} alt="User avatar" className={css.avatar} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

// PropTypes
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
