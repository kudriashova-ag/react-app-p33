import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = () => {
    if (title.trim().length < 3) {
      setErrorMessage("Title must be at least 3 symbols");
      return;
    }
    addTask(title);
    setErrorMessage("");
    setTitle("");
  };

  return (
    <div>
      <div className="todo-form">
        <input
          type="text"
          value={title}
          onChange={changeHandler}
          onKeyDown={(e) => {
            if (e.key === "Enter") submitHandler();
          }}
        />
        <button onClick={submitHandler}>Add</button>
      </div>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default TodoForm;
