import { createContext, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const TodoContext = createContext();

const TodoProvider = (props) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const toggleCompleteTodos = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        toggleCompleteTodos,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
