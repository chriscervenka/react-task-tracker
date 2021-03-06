// import logo from './logo.svg';
// import './App.css';

// import React from 'react'
// import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    }
  ])

  // DELETE Task
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} 
              onDelete={deleteTask} 
      /> : 'No Tasks to show!'}
    </div>

    
  );
}

export default App;
