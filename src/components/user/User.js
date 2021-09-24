import PropTypes from 'prop-types';
import styles from './User.module.css';
// console.log(styles);

const UserMarkup = ({
  name,
  avatar,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <div className={styles.thumb}>
          <img src={avatar} alt={name} className={styles.avatar} />
        </div>
        <p className={styles.profile__items}>{name}</p>
        <p className={styles.profile__items}>@a{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stats__item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}> {followers}</span>
        </li>
        <li className={styles.stats__item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}> {views}</span>
        </li>
        <li className={styles.stats__item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}> {likes}</span>
        </li>
      </ul>
    </div>
  );
};

UserMarkup.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default UserMarkup;
