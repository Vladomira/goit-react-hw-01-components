import PropTypes from 'prop-types';
import st from './Friends.module.css';

const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <>
      {isOnline ? (
        <span className={st.active}></span>
      ) : (
        <span className={st.offline}></span>
      )}
      <div className={st.thumb}>
        <img className={st.avatar} src={avatar} alt={name} width="48" />
      </div>
      <p className={st.name}>{name}</p>
    </>
  );
};
FriendItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
export default FriendItem;
