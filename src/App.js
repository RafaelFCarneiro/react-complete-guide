import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (newUser) =>
    setUsers((prevUsers) => [...prevUsers, newUser]);

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
