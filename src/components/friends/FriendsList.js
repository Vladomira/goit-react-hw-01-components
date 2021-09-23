import PropTypes from 'prop-types';
import friendsData from './friends.json';
// ЗАВАНТАЖИТИ ФОТО ЛЮДЕЙ
const FriendsList = title => {
  const friends = friendsData;
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <li className="item" key={id}>
            {isOnline ? (
              <span className="status active">yes</span>
            ) : (
              <span className="status">no</span>
            )}
            {/* <span className="status">{isOnline}</span> */}
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
export default FriendsList;
// {isOnline ? <span className="status active"></span> :
// <span className="status"></span>}
