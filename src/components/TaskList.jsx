import React, { useEffect, useContext } from 'react'
import useTask from '../hooks/useTask'
import { TaskContext } from '../context/TasksProvider'

const TaskList = () => {
  const { tasks, setTasks } = useContext(TaskContext)
  const { getTaskOfUser } = useTask()

  useEffect(() => {
    getTaskOfUser().then(data => {
      setTasks(data)
    })
  }, [])

  return (
    <div>
      {tasks ?
        tasks.map(task => {
          return (
            <div key={task._id}>
              <h2>{task.taskTitle}</h2>
              <h2>{task.taskDate}</h2>
              <p>{task.taskDesc}</p>
            </div>
          )
        }) :
        <div></div>}
    </div>
  )
}

export default TaskList