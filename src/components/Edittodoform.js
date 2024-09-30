import React, { useState } from "react";

const EdittodoForm = ({ editTodo,task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value,task.id);

    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      <button className="todo-btn" type="submit">
        Update Task
      </button>
    </form>
  );
};

export default EdittodoForm;
