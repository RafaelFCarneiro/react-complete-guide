import { useContext } from 'react';
import TodoItem from './TodoItem';

import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = () => {
  const ctc = useContext(TodosContext);
  
  return (
    <ul className={classes.todos}>
      {ctc.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={ctc.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
