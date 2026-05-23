import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  // Initialize the state with an array of todo items
  const [todos, setTodos] = useState([
    { text: 'Learn React', completed: false },
    { text: 'Build a React app', completed: false },
    { text: 'Deploy the React app', completed: false }
  ]);

  // Update the completion state using the item's index
  const handleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;