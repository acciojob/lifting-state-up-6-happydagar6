import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todoItem) => (
          <li key={todoItem.id}>
            {todoItem.text}
            
            {/* Conditional Rendering: Agar completed false hai tabhi button dikhega */}
            {todoItem.completed === false && (
              <button 
                className="complete-button" 
                onClick={() => handleComplete(todoItem.id)}
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;