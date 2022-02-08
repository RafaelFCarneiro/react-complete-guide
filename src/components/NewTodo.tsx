import React, { useContext, useRef } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const ctx = useContext(TodosContext);  
  const inputRef = useRef<HTMLInputElement>(null);
  
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value;
    if (!enteredText.trim().length) return;

    ctx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
