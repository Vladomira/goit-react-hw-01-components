import PropTypes from 'prop-types';
import friendsData from './friends.json';
import st from './Friends.module.css';

const FriendsList = title => {
  const friends = friendsData;
  return (
    <div className={st.container}>
      <section className={st.friends}>
        <ul className={st.friend__list}>
          {friends.map(friend => {
            const { avatar, name, isOnline, id } = friend;
            return (
              <li className={st.item} key={id}>
                {isOnline ? (
                  <span className={st.active}></span>
                ) : (
                  <span className={st.offline}></span>
                )}
                <div className={st.thumb}>
                  <img
                    className={st.avatar}
                    src={avatar}
                    alt={name}
                    width="48"
                  />
                </div>
                <p className={st.name}>{name}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

FriendsList.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
export default FriendsList;
