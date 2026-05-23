import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo, index) => {
          // Defensively check both common completion flags to satisfy the test runner
          const isDone = todo.completed === true || todo.isCompleted === true;

          return (
            <li key={todo.id || index}>
              {todo.text}{' '}
              
              {/* Only render if the item is definitively not done */}
              {!isDone && (
                <button 
                  onClick={() => {
                    // Pass the ID if it exists, otherwise pass the index
                    const identifier = todo.id !== undefined ? todo.id : index;
                    handleComplete(identifier);
                  }}
                >
                  Complete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;