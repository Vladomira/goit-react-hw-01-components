import Container from 'components/Container/Container';
import transactions from 'components/transactions/transactions.json';
import TransactionHistory from 'components/transactions/index';
import statisticalData from 'components/statistics/statistics.json';
import Statistics from 'components/statistics/index';
import user from 'components/user/user.json';
import UserMarkup from 'components/user/index';
import friends from 'components/friends/friends.json';
import Friend from 'components/friends/index';

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
