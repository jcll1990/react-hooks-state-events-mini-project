import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";

const name = 'My Tasks'

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCat, setSelectedCat] = useState("All")

  const filteredTasks = tasks.filter(task => {
    if (selectedCat === 'All' || task.category === selectedCat) {
      return true
    } else {
      return false
    }
  })

  return (
    <div className="App">
      <h2>{name}</h2>
      <CategoryFilter 
        categories={categories}
        setSelectedCat={setSelectedCat} />
      <NewTaskForm 
        categories={categories}
        setTasks={setTasks} />
      <TaskList 
        tasks={filteredTasks} 
        setTasks={setTasks} />
    </div>
  );
}

export default App;