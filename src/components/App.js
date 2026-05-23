import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  // Initialize the state with an array of todo items
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy the React app', completed: false }
  ]);

  // Function to mark a specific todo as completed
  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Pass the state and the update function as props to the child */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;