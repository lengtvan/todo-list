import React, {useState} from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import Header from "./components/Header"
import TaskList from './components/TaskList';
function App() {
  const [tasks,setTasks]=useState([{id:"task1", title:"Learn JS", status:0},{id:"task2",title:"Code a to-do list", status:0},{id:"task3",title:"Learn Italian", status:0}]);
  const [showIncomplete, setShowIncomplete] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleInputChange=(e)=>{
    setNewTask(e.target.value);
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (newTask){
      const task={
        id: Date.now(),
        title: newTask,
        status:0
      }
      setTasks([...tasks,task]);
      setNewTask("");
    }
  }
  const setTaskStatus=(taskId,status)=>{
    setTasks(tasks.map((task)=>{
      if(task.id===taskId){
        return {...task, status: status? 1:0}
      }
      return task;
    }
    )
  
  )
  }
const removeTask=(taskId)=>{
  setTasks(tasks.filter(task=>(task.id!==taskId)))
}
  return (
    <div className="container">
    <Header title="To-do list" subTitle="Get things done"/>
    <TaskList 
    tasks={tasks} 
    showIncomplete={showIncomplete} 
    setTaskStatus={setTaskStatus} 
    removeTask={removeTask} 
    setShowIncomplete={setShowIncomplete} />

    <AddTaskForm 
    handleSubmit={handleSubmit} 
    newTask={newTask} 
    handleInputChange={handleInputChange} />
  </div>
  );
}

export default App;
