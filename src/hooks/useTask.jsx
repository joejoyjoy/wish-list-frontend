import React, { useContext } from 'react'
import { TaskContext } from '../context/TasksProvider'
import { sidebarContext } from '../context/sidebarContext'

const useTask = () => {
  const { VITE_REACT_APP_SERVER_URL } = import.meta.env
  const { tasks, setTasks } = useContext(TaskContext)
  const { toggleSidebar } = useContext(sidebarContext);

  const addTask = async ({ taskTitle, taskDate, taskDesc, taskState }) => {
    const userID = window.localStorage.getItem("userID")
    if (!userID) return console.error("addTask: You are not logged in");

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
    if (!userID) return console.error("getTaskOfUser: You are not logged in");

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

      let newArray = tasks.map(task => task._id == data._id ? { ...task, taskState: data.taskState } : task);
      setTasks(newArray)

    } catch (error) {
      console.error(error);
    }
  }

  const deleteTask = async (taskID) => {

    try {
      const response = await fetch(`${VITE_REACT_APP_SERVER_URL}/todo/delete/${taskID}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json()
      setTasks(oldValues => { return oldValues.filter(task => task._id !== data._id) })
      toggleSidebar()

    } catch (error) {
      console.error(error);
    }
  }

  const changeTaskValue = async (taskID, taskTitle, taskDesc) => {

    try {
      const response = await fetch(`${VITE_REACT_APP_SERVER_URL}/todo/change/${taskID}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          taskTitle: taskTitle,
          taskDesc: taskDesc,
        })
      })

      const data = await response.json()

      let newArray = tasks.map(task => task._id == data._id ? {
        ...task,
        taskTitle: data.taskTitle,
        taskDesc: data.taskDesc,
      } : task);

      setTasks(newArray)

    } catch (error) {
      console.error(error);
    }
  }

  return {
    addTask,
    getTaskOfUser,
    changeTaskState,
    deleteTask,
    changeTaskValue
  };
}

export default useTask