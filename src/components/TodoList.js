import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}{' '}
            {/* The button will instantly disappear when completed becomes true */}
            {!todo.completed && (
              <button onClick={() => handleComplete(index)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;