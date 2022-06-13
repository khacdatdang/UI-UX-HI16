import React, { useEffect } from 'react';
import { useState } from 'react';
import {FaGithub} from 'react-icons/fa'
import { v4 as uuid } from "uuid";
import { DragDropContext } from "react-beautiful-dnd";
import List from "../../childcomponent/taskListWorker/List";
import Alert from "../../childcomponent/taskListWorker/Alert";
import { useGlobalContext } from "../../childcomponent/taskListWorker/context";

const TaskList = () => {
  const {
    inputRef,
    tasks,
    setTasks,
    alert,
    showAlert,
    isEditing,
    setIsEditing,
    editId,
    setEditId,
    name,
    setName,
    filter,
    setFilter,
    isColorsOpen,
    setIsColorsOpen,
  } = useGlobalContext();

  const addTask = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "Invalid Task Name!");
    } else if (name && isEditing) {
      setTasks(
        tasks.map((task) => {
          return task.id === editId ? { ...task, name: name } : task;
        })
      );
      setIsEditing(false);
      setEditId(null);
      setName("");
      showAlert(true, "Task Edited.");
    } else {
      const newTask = {
        id: uuid().slice(0, 8),
        name: name,
        completed: false,
        color: "#009688",
      };
      setTasks([...tasks, newTask]);
      showAlert(true, "Task Added.");
      setName("");
    }
  };


  const filterTasks = (e) => {
    setFilter(e.target.dataset["filter"]);
  };

  const deleteAll = () => {
    setTasks([]);
    showAlert(true, "Danh sách công việc trống!");
  };

  useEffect(() => {
    inputRef.current.focus();
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [inputRef, tasks]);

  const handleDragEnd = (param) => {
    const srcI = param.source.index;
    const desI = param.destination?.index;
    if (desI) {
      const reOrdered = [...tasks];
      reOrdered.splice(desI, 0, reOrdered.splice(srcI, 1)[0]);
      setTasks(reOrdered);
    }
  };

  return (
  <>
    <div className='container' >
      {alert && <Alert msg={alert.msg} />}
      <form className='head' onSubmit={addTask}>
        <input
          type='text'
          ref={inputRef}
          placeholder='Tên công việc'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>{"Tìm kiếm"}</button>
      </form>
      <div className='filter'>
        <button
          data-filter='all'
          className={filter === "all" ? "active" : ""}
          onClick={filterTasks}
        >
          Tất cả
        </button>
        <button
          data-filter='completed'
          className={filter === "completed" ? "active" : ""}
          onClick={filterTasks}
        >
          Hoàn thành
        </button>
        <button
          data-filter='uncompleted'
          className={filter === "uncompleted" ? "active" : ""}
          onClick={filterTasks}
        >
          Chưa hoàn thành
        </button>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        {tasks.length > 0 ? (
          <List />
        ) : (
          <p className='no-tasks'>Không có công việc nào!</p>
        )}
      </DragDropContext>
      {tasks.length > 2 && (
        <button
          className='btn-delete-all'
          onClick={deleteAll}
          title='Xoá tất cả các công việc (Bao gồm cả hoàn thành và chưa hoàn thành)!'
        >
          Xoá hết
        </button>
      )}
	  
    </div>
	</>
  );
};

export default TaskList;
