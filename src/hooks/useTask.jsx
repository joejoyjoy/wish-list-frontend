import React from 'react'

const useTask = () => {
  const { VITE_REACT_APP_SERVER_URL } = import.meta.env



  const addTask = async ({ taskTitle, taskDesc }) => {
    const userID = window.localStorage.getItem("userID")
    if (!userID) return console.error("You are not logged in");

    try {
      const response = await fetch(`${VITE_REACT_APP_SERVER_URL}/todo/create/${userID}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ taskTitle, taskDesc })
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

  return {
    addTask,
    getTaskOfUser
  };
}

export default useTask