import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  // 1. Initial State: Kuch tasks banaye jo abhi complete nahi hain
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React Fundamentals", completed: false },
    { id: 2, text: "Practice Lifting State Up", completed: false },
    { id: 3, text: "Build a Project", completed: false }
  ]);

  // Yeh function Child se call hoga
  const handleComplete = (targetId) => {
    // Array ko map karke sirf us task ko update karenge jiski ID match hogi
    const updatedTodos = todos.map((todoItem) => {
      if (todoItem.id === targetId) {
        return { ...todoItem, isCompleted: true };
      }
      return todoItem;
    });
    
    // Naya data set kar diya, jisse React component ko wapas render karega
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Child ko data (todos) aur function (handleComplete) dono as a prop pass kar diye */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;