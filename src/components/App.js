import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  // 1. Initial State: Kuch tasks banaye jo abhi complete nahi hain
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React Fundamentals", completed: false },
    { id: 2, text: "Practice Lifting State Up", completed: false },
    { id: 3, text: "Build a Project", completed: false }
  ]);

  // 2. State update karne wala function
  const handleComplete = (id) => {
    // Puraane todos par map chalaya. Agar id match hui, toh uska 'completed' true kar diya
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    
    // Nayi list ko state mein set kar diya
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>My Todo List (Parent Component)</h2>
      
      {/* 3. Child ko data (todos) aur function (handleComplete) dono pass kar diye */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;