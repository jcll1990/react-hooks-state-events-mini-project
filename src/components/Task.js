import React from "react";

function Task({ category, text, setTasks }) {
  function handleClick() {
    setTasks(oldTasks => oldTasks.filter(task => {
      // if (task.text === text) {
      //   return false 
      // } else {
      //   return true
      // }
      return task.text !== text
    }))
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;