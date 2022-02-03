import React from "react";

const TodoList = ({ todos, handleEdit, handledelete }) => {
  return (
    <ul className="alltodos">
      {todos.map((t) => (
        <li className="singletodo">
          <span className="todo-text" key={t.id}>
            {t.todo}
          </span>
          <button onClick={() => handleEdit(t.id)}>Edit</button>
          <button onClick={() => handledelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;