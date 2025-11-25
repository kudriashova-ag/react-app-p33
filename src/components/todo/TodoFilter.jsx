import React from "react";

const TodoFilter = ({ setActiveFilter, activeFilter, filters }) => {
  const filterKeys = Object.keys(filters); // ['all', 'todo', 'done']

  return (
    <div className="todo-filter">
      {filterKeys.map((key) => (
        <button
          key={key}
          onClick={() => setActiveFilter(key)}
          style={{
            backgroundColor: activeFilter === key ? "dodgerblue" : "#ddd",
          }}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
