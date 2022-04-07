import React from 'react'
import TaskItems from './TaskItems'

function TaskList({tasks,showIncomplete,setTaskStatus,removeTask, setShowIncomplete}) {
  return (
    <>
    <ul className="task-list">
    {tasks.filter((task)=>(showIncomplete? task.status!==1:true)).map((task)=>(<TaskItems key={task.id} task={task} setTaskStatus={setTaskStatus} removeTask={removeTask}  />))}
  </ul>
  <div className="filter-wrapper">
  <label htmlFor="filter" className="filter-label">Show Incomplete Tasks</label>
  <input type="checkbox" className="filter" checked={showIncomplete} onChange={(e)=>{setShowIncomplete(e.target.checked)}}></input>
</div>
    </>
   
  )
}

export default TaskList