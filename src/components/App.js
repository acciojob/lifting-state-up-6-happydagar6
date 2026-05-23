import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  // Initialize the state
 const [todos, setTodos] = useState([
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a React app', completed: false },
  { id: 3, text: 'Deploy the React app', completed: false }
]);

const handleComplete = (id) => {
  setTodos(prevTodos =>
    prevTodos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    )
  );
};
};

export default App;