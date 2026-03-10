import React from 'react';

// Props mein todos aur handleComplete function receive kiye
function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todoItem) => (
          <li key={todoItem.id}>
            {todoItem.text}
            
            {todoItem.isCompleted === false && (
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
}

export default TodoList;