import Container from './Container/Container';
import transactions from './transactions/transactions.json';
import TransactionHistory from './transactions/index';
import statisticalData from './statistics/statistics.json';
import Statistics from './statistics/index';
import user from './user/user.json';
import UserMarkup from './user/index';
import friends from './friends/friends.json';
import Friend from './friends/index';

export default function App() {
  return (
    <Container>
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
      <Friend friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
