import React, { useEffect, useState, useContext, useRef } from "react";
import data from '../../hooks/data.json';
// import { useStorage } from '../../hooks/storage';

const STORAGE_KEY = 'tasks';

const getTasks = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {
  useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(data.tasks)), []);
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState(getTasks());
  const [alert, setAlert] = useState({ show: false, msg: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [filter, setFilter] = useState("all");
  const [location, setLocation] = useState({});
  const refContainer = useRef(null);

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    showAlert(true, "Xoá công việc thành công.");
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    showAlert(true, "Trạng thái công việc đã thay đổi.");
  };

  const editTask = (id) => {
    const { name } = tasks.find((task) => task.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(name);
    inputRef.current.focus();
  };

  const showAlert = (show, msg) => {
    setAlert({ show, msg });
  };

  return (
    <AppContext.Provider
      value={{
        tasks,
        setTasks,
        removeTask,
        toggleDone,
        refContainer,
        alert,
        showAlert,
        isEditing,
        setIsEditing,
        editId,
        setEditId,
        editTask,
        name,
        setName,
        getTasks,
        filter,
        setFilter,
        inputRef,
        location,
        setLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
