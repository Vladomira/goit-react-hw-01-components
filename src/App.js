import transactions from './components/transactions/transactions.json';
import TransactionHistory from './components/transactions/Transactions';
import statisticalData from './components/statistics/statistics.json';
import Statistics from './components/statistics/Statistics';
import user from './components/user/user.json';
import UserMarkup from './components/user/User';
// import { friends, FriendList } from './components/friends/index';
import friends from './components/friends/friends.json';
import FriendList from './components/friends/FriendsList';

export default function App() {
  return (
    <div>
      <UserMarkup
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      {/* {statisticalData.map(el => { */}
      {/* <Statistics stats={statisticalData} key={statisticalData.id} />; */}
      {/* })} */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
