import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react"
function App() {
  const [showAddTask, setShowAddTask] = useState
  (false)
  const [tasks,setTasks] = useState([
    {
      id: 1,
      text: "first",
      day: "1st May",
      reminder: false
    },
    {
      id: 2,
      text: "second",
      day: "5th Nov",
      reminder: false
    },
    {
      id: 3,
      text: "third",
      day: "Today",
      reminder: false
    },
  ])


  //Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks,newTask])
    
  }

  //delete

 const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id !== id))
 }

 //toggle
 const toggleReminder = (id) => {
   setTasks(tasks.map((task ) => task.id === id ? {...task, reminder: !task.reminder} : task))
 }

  return (
    <div className="container">
      
      <Header onAdd = {() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete = {deleteTask}  onToggle = {toggleReminder}/>)
      : ("no tasks")
      } 

    </div>
  )
}

export default App;
