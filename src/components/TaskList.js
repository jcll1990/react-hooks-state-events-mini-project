import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  return (
    <div className="tasks">
      {tasks.map(task => {
        return <Task 
          category={task.category} 
          text={task.text} 
          setTasks={setTasks} />
      })}
    </div>
  );
}

export default TaskList;