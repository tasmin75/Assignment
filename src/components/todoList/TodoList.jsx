import React,{useState} from "react";
import { useTodoContext } from "../../context/TodoContext";
import style from "./TodoList.module.css";

const TodoList = () => {
  const { state, dispatch } = useTodoContext();
 // const [completed, setCompleted] =useState(false)

  const toggleTask = (taskId) => {
    dispatch({ type: "TOGGLE_TASK", payload: taskId });
  };

  const removeTask = (taskId) => {
    dispatch({ type: "REMOVE_TASK", payload: taskId });
  };

  return (
    <div className={style.container}>
      <h2>To-Do List</h2>
      <ul className={style.allList}>
        {state.tasks.map((task) => (
          <li key={task.id}>
            <p>{task.title}</p>
            <div className={style.btn}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <button onClick={() => removeTask(task.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
