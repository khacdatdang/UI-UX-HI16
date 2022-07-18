import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const getInitialTodo = () => {

  // getting todo list
  var localTodoList = window.localStorage.getItem('todoList');
  // if todo list is not empty
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }else{
    const tmpList = [
      {
        id: uuid(),
        title: "Xay dung cot so 1",
        status: "incomplete",
        time: new Date(2021, 6, 25),
      },
      {
        id: uuid(),
        title: "Xay dung cot so 2",
        status: "complete",
        time: new Date(2021, 6, 24),
      }
    ]
    window.localStorage.setItem('todoList', JSON.stringify(tmpList));
    localTodoList = window.localStorage.getItem('todoList');
    return JSON.parse(localTodoList);
  }
  // window.localStorage.setItem('todoList', []);
  // return [];
};

const initialValue = {
  filterStatus: 'all',
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          'todoList',
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },
    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.status = action.payload.status;
            todo.title = action.payload.title;
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = [...todoListArr];
      }
    },
    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
