import React, { useState, createContext } from 'react';

export const TaskContext = createContext()

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [creatingTasks, setCreatingTasks] = useState(false)

  return (
    <TaskContext.Provider value={{ tasks, setTasks, creatingTasks, setCreatingTasks }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TasksProvider