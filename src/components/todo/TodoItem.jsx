import React, { useState } from "react";

const TodoItem = ({ item, removeTask, toggleDone, editTitle }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(item.title);

  const normalTemplate = (
    <span
      onClick={() => setIsEdit(true)}
      style={{ textDecoration: item.done ? "line-through" : "none" }}
    >
      {item.title}
    </span>
  );

  const editTemplate = (
    <input
      type="text"
      autoFocus={true}
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      onBlur={() => {
        editTitle(item.id, title);
        setIsEdit(false);
      }}
    />
  );


  return (
    <div className="todo-item">
      <input
        type="checkbox"
        defaultChecked={item.done}
        onClick={() => toggleDone(item.id)}
      />

      { isEdit ? editTemplate : normalTemplate }

      <button className="remove" onClick={() => removeTask(item.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
