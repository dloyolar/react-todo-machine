// import './App.css';

import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoList } from './components/TodoList/TodoList';
import { TodoSearch } from './components/TodoSearch/TodoSearch';

const todos = [
  { text: 'Cut Onion', completed: false },
  { text: 'Take react intro course', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'Ver spiderman de pana', completed: true },
  { text: 'Llorar con Endgame', completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo, i) => (
          <TodoItem
            text={todo.text}
            key={todo.text + i}
            complete={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;