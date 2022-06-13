import React from "react";
import ReactDOM from "react-dom";
import "../../childcomponent/taskListWorker/index.css";
import TaskList from "../../layout/TaskList/taskList";
import { AppProvider } from "../../childcomponent/taskListWorker/context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <TaskList />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
