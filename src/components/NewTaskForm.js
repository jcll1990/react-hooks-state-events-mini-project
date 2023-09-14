import React from "react";

function NewTaskForm({ categories, setTasks }) {
  function handleSubmit(event) {
    event.preventDefault()
    const newTask = {
      'text': event.target.text.value,
      'category': event.target.category.value
    }
    
    setTasks(prevTasks => [...prevTasks, newTask])
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categories.map(cat => {
            return <option value={cat}>{cat}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;