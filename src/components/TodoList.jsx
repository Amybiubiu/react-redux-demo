import React from "react";

const TodoList = ({ onTodoClicked, todos }) => {
  return (
    <ul>
      {todos&& todos.map((todo, index) => (
        <li
          onClick={() => onTodoClicked(index)}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: todo.completed ? "default" : "pointer",
          }}
          key={todo.text}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
