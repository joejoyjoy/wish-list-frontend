import React, { useState, createContext } from 'react';

export const TaskContext = createContext()

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [creatingTasks, setCreatingTasks] = useState(false)
  const [editingTasks, setEditingTasks] = useState(false)

  const value = { tasks, setTasks, creatingTasks, setCreatingTasks, editingTasks, setEditingTasks }

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  )
}

export default TasksProvider