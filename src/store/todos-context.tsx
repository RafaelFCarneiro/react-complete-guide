import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextType>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) =>
    setTodos((prevTodos) => prevTodos.concat(new Todo(text)));

  const removeTodoHandler = (id: string) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

  const contextValue: TodosContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider