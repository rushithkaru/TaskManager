import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from "react"
function App() {
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
      <Header />
      <Tasks tasks={tasks} onDelete = {deleteTask}  onToggle = {toggleReminder}/>
    </div>
  )
}

export default App;
