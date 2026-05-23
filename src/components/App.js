import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  // Initialize the state
 const [todos, setTodos] = useState([
  { text: 'Learn React', completed: false },
  { text: 'Build a React app', completed: false },
  { text: 'Deploy the React app', completed: false }
]);

const handleComplete = (index) => {
  setTodos(prevTodos =>
    prevTodos.map((todo, i) =>
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