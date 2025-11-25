import React, { useState } from "react";
import "./TodoList.css";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import list from "./data";
import uniqid from "uniqid";

const TodoList = () => {
  const [tasks, setTasks] = useState(list);

  const addTask = (title) => {
    setTasks([...tasks, { id: uniqid(), title, done: false }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id) => { 
    const newTasks = tasks.map(task => { 
      if (task.id === id) { 
        return {...task, done: !task.done}
      }
      return task;
    }) 
    setTasks(newTasks);
  }

  const editTitle = (id, title) => { 
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: title };
      }
      return task;
    });
    setTasks(newTasks);
  }


  return (
    <div className="todo">
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />
      <div className="todo-panel">
        <TodoFilter />
        <div className="todo-list">
          {tasks.map((task) => (
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
