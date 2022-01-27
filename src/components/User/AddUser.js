import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [name, setName] = useState('');
  const userChangeHandler = (event) => setName(event.target.value);

  const [age, setAge] = useState('');
  const ageChangeHandler = (event) => setAge(event.target.value);

  const [error, setError] = useState();
  const errorHandler = () => setError(null);

  const addUserHandler = (event) => {
    event.preventDefault();

    if (isNotValidName(name)) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name (non-empty values).',
      });
      return;
    }
    if (isNotValidAge(age)) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onAddUser({ id: Math.random().toString(), name, age });
    setAge('');
    setName('');
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Username</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={userChangeHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

const isNotValidName = (name) => !name.trim().length;
const isNotValidAge = (age) => !age.trim().length && +age < 1;
