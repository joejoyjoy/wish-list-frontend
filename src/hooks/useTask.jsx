import React, { useContext } from 'react'
import { TaskContext } from '../context/TasksProvider'

const useTask = () => {
  const { VITE_REACT_APP_SERVER_URL } = import.meta.env
  const { tasks, setTasks } = useContext(TaskContext)

  const addTask = async ({ taskTitle, taskDate, taskDesc, taskState }) => {
    const userID = window.localStorage.getItem("userID")
    if (!userID) return console.error("You are not logged in");

    try {
      const response = await fetch(`${VITE_REACT_APP_SERVER_URL}/todo/create/${userID}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ taskTitle, taskDate, taskDesc, taskState })
      })

      const data = await response.json()

    } catch (error) {
      console.error(error);
    }
  }

  const getTaskOfUser = async () => {
    const userID = window.localStorage.getItem("userID")
    if (!userID) return console.error("You are not logged in");

    try {
      const response = await fetch(`${VITE_REACT_APP_SERVER_URL}/todo/${userID}`)
      const data = await response.json()

      return data.data;

    } catch (error) {
      console.error(error);
    }
  }

  const changeTaskState = async (taskID, taskCurrentState) => {

    try {
      const response = await fetch(`${VITE_REACT_APP_SERVER_URL}/todo/patch/${taskID}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          taskState: taskCurrentState,
        })
      })

      const data = await response.json()

      let newArray = tasks.map(task => task._id == data._id ? {...task, taskState: data.taskState} : task);
      setTasks(newArray)

    } catch (error) {
      console.error(error);
    }
  }

  return {
    addTask,
    getTaskOfUser,
    changeTaskState
  };
}

export default useTask