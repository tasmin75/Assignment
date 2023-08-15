import React, { useState } from 'react';
import { useTodoContext } from '../../context/TodoContext';
import style from './TodoForm.module.css'

const TodoForm = () => {
  const [newTask, setNewTask] = useState('');
  const {state, dispatch } = useTodoContext();

  
  const handleSubmit = e => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      dispatch({
        type: 'ADD_TASK',
        payload: { id: Date.now(), title: newTask, completed: false },
      });
      setNewTask('');
    }
  };

  return (
    <div className={style.container}>
      <h2>Add New Task</h2>
      <div className={style.details}>
        <p>Total tasks: {state.tasks.length}</p>
       <p>Completed tasks: {state.tasks.filter(task => task.completed).length}</p>
        </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TodoForm;
