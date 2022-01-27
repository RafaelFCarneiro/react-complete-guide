import { useRef, useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  
  const [error, setError] = useState();
  const errorHandler = () => setError(null);

  const addUserHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    if (isNotValidName(name)) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name (non-empty values).',
      });
      return;
    }
    
    const age = ageInputRef.current.value;
    if (isNotValidAge(age)) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onAddUser({ id: Math.random().toString(), name, age });
    nameInputRef.current.value = '';
    ageInputRef.current.value = ''
  };

  return (
    <Wrapper>
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
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

const isNotValidName = (name) => !name.trim().length;
const isNotValidAge = (age) => !age.trim().length && +age < 1;
