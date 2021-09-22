import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/friend-list-item/FriendList';
import FriendListItem from './components/friend-list-item/FriendListItem';
import TransactionHistory from './components/TransactionHistory';

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticalData} />;
      <FriendList>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            id={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </FriendList>
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
