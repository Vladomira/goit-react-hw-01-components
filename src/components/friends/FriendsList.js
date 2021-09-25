import PropTypes from 'prop-types';
import FriendItem from './Frienditem';
import st from './Friends.module.css';

const FriendsList = ({ friends }) => {
  return (
    <div className={st.container}>
      <section className={st.friends}>
        <ul className={st.friend__list}>
          {friends.map(({ avatar, name, isOnline, id }) => (
            <li className={st.item} key={id}>
              <FriendItem avatar={avatar} name={name} isOnline={isOnline} />
            </li>
          ))}
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
