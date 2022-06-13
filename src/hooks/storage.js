import { useEffect, useState } from 'react';
import data from './data.json';

const STORAGE_KEY = 'tasks';

function useStorage() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    setTasks(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
  };

  useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(data.tasks)), []);

  useEffect(() => fetchTasks, []);

  const addTask = (task) => {
    const newTask = [task, ...tasks];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTask));
    setTasks(newTask);
  };

  const getTasks = () => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  };
  
  const updateTask = (id, task) => {
    const editedTasks = tasks.map((p) => (p.id === id ? task : p));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(editedTasks));
    setTasks(editedTasks);
  };

  const deleteTask = (id) => {
    const deleteTasks = tasks.filter((p) => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(deleteTasks));
    setTasks(deleteTasks);
  };
  console.log(tasks)
  return { tasks, addTask, updateTask, deleteTask, getTasks };
}

export default useStorage;
