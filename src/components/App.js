import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  // Initial State: Har task ke andar 'completed: false' hai
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React Fundamentals", completed: false },
    { id: 2, text: "Practice Lifting State Up", completed: false },
    { id: 3, text: "Build a Project", completed: false }
  ]);

  const handleComplete = (targetId) => {
    // Array ko update karna
    const updatedTodos = todos.map((todoItem) => {
      // Agar button ki ID aur task ki ID match karti hai
      if (todoItem.id === targetId) {
        // Toh state ko completed: true kar do
        return { ...todoItem, completed: true }; 
      }
      return todoItem;
    });
    
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;