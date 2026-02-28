import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          style={{
            marginBottom: "10px",
            textDecoration: todo.completed ? "line-through" : "none",
          }}
          key={todo.id}
        >
          {todo.text}
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
