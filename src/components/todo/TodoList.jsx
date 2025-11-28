import React, { useEffect, useReducer, useState } from "react";
import "./TodoList.css";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import list from "./data";
import uniqid from "uniqid";
import todoReducer from "../../reducers/TodoReducer";

const TodoList = () => {
  const [tasks, dispatch] = useReducer(todoReducer, localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : list);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => { 
    setActiveFilter(localStorage.getItem('activeFilter') || 'All');
  }, [])

  useEffect(() => { 
      localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => { 
      localStorage.setItem('activeFilter', activeFilter)
  }, [activeFilter])


  const addTask = (title) => {
    dispatch({
      type: 'add',
      payload: title
    })
  };

  const removeTask = (id) => {
    dispatch({
      type: 'remove',
      payload: id
    })
  };

  const toggleDone = (id) => {
    dispatch({
      type: 'changeDone',
      payload: id
    })
  };

  const editTitle = (id, title) => {
    dispatch({
      type: 'changeTitle',
      payload: {id, title}
    })
  };

  const filters = {
    All: () => true,
    Done: (task) => task.done,
    'Todo tasks': (task) => !task.done
  };

  return (
    <div className="todo">
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />
      <div className="todo-panel">
        <TodoFilter
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
          filters={filters}
        />
        <div className="todo-list">
          {tasks.filter(filters[activeFilter]).map((task) => (
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
