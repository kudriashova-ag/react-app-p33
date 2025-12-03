import React, { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import "./TodoList.css";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import list from "./data";
import todoReducer from "../../reducers/TodoReducer";

const filters = {
  All: () => true,
  Done: (task) => task.done,
  "Todo tasks": (task) => !task.done,
};

const sortFunctions = {
  nameAsc: (a, b) => a.title.localeCompare(b.title),
  nameDesc: (a, b) => b.title.localeCompare(a.title),
  doneAsc: (a, b) => a.done - b.done,
  doneDesc: (a, b) => b.done - a.done,
};

const TodoList = () => {
  const [tasks, dispatch] = useReducer(
    todoReducer,
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : list
  );
  const [activeFilter, setActiveFilter] = useState("All");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    setActiveFilter(localStorage.getItem("activeFilter") || "All");
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("activeFilter", activeFilter);
  }, [activeFilter]);

  const addTask = useCallback((title) => {
    dispatch({
      type: "add",
      payload: title,
    });
  }, []);

  const removeTask = useCallback((id) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  }, [])

  const toggleDone = useCallback((id) => {
    dispatch({
      type: "changeDone",
      payload: id,
    });
  }, [])

  const editTitle = useCallback((id, title) => {
    dispatch({
      type: "changeTitle",
      payload: { id, title },
    });
  }, [])


  const sortedTasks = useMemo(() => { 
    if (sort === "default") return tasks;
    return [...tasks].sort(sortFunctions[sort]);
  }, [tasks, sort])

  return (
    <div className="todo">
      
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />

      <div>
        <button onClick={() => setSort("nameAsc")}>Name Asc</button>
        <button onClick={() => setSort("nameDesc")}>Name Desc</button>
        <button onClick={() => setSort("doneAsc")}>Done Asc</button>
        <button onClick={() => setSort("doneDesc")}>Done Desc</button>
        <button onClick={() => setSort("default")}>Default</button>
      </div>

      <div className="todo-panel">
        <TodoFilter
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
          filters={filters}
        />
        <div className="todo-list">
          {sortedTasks.filter(filters[activeFilter]).map((task) => (
            <TodoItem
              key={task.id}
              item={task}
              removeTask={removeTask}
              toggleDone={toggleDone}
              editTitle={editTitle}
            />
          ))}
        </div>
      </div>

      <div>
        Done: {tasks.filter((task) => task.done).length} from {tasks.length}
      </div>
    </div>
  );
};

export default TodoList;
