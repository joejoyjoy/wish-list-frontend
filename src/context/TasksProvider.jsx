import React, { useState, createContext } from 'react';

export const TaskContext = createContext()

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TasksProvider