import React, { useState } from "react";

const Todoform = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("")
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter your task..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      <button className="todo-btn" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default Todoform;
