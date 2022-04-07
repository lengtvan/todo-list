import React from 'react'

function AddTaskForm({handleSubmit,newTask,handleInputChange}) {
  return (
<form onSubmit={handleSubmit} className="form">
    <label htmlFor="newitem">Add to to-do list</label>
    <input type="text" className="new-item" value={newTask} onChange={handleInputChange}></input>
    <button type="submit" onClick={handleSubmit}>Add Item</button>
  </form>  )
}

export default AddTaskForm