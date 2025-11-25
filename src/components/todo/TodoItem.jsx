import React, { useState } from "react";

const TodoItem = ({ item, removeTask, toggleDone, editTitle }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [errorMessage, setErrorMessage] = useState('');


  const changeHandler = (e) => {
    setTitle(e.target.value);
    if (e.target.value.trim().length < 3) {
      setErrorMessage("Title must be at least 3 symbols");
      return;
    }
    setErrorMessage('')
  };

  
  const normalTemplate = (
    <span
      onClick={() => setIsEdit(true)}
      style={{ textDecoration: item.done ? "line-through" : "none" }}
    >
      {item.title}
    </span>
  );

  const editTemplate = (
    <div>
      <input
        type="text"
        autoFocus={true}
        value={title}
        onChange={changeHandler}
        onBlur={() => {
          if (!errorMessage) 
            editTitle(item.id, title);
          setIsEdit(false);
        }}
      />
      {errorMessage && <div className="error">{ errorMessage }</div>}
    </div>
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
