import React, { Fragment, useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (newUser) =>
    setUsers((prevUsers) => [...prevUsers, newUser]);

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </Fragment>
  );
}

export default App;
