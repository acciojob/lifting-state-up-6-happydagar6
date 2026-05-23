import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  // Initialize the state with an array of todo items
  const [todos, setTodos] = useState([
    { text: 'Learn React', isCompleted: false },
    { text: 'Build a React app', isCompleted: false },
    { text: 'Deploy the React app', isCompleted: false }
  ]);

  // Function to mark a specific todo as completed using its INDEX
  const handleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isCompleted = true; // Mark as true
    setTodos(updatedTodos);
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