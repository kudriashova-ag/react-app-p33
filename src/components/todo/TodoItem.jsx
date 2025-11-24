import React from "react";

const TodoItem = ({ item, removeTask }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" defaultChecked={item.done} />
      <span style={{textDecoration: item.done ? 'line-through' : 'none'}}>{item.title}</span>
      <button className="remove" onClick={() => removeTask(item.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
