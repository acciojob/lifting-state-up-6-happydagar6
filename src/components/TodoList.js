import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}{' '}
            {/* Renders button only if the item is NOT completed */}
            {(!todo.isCompleted && !todo.completed) && (
              <button onClick={() => handleComplete(index)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;