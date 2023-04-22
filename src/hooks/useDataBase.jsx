import React, { useContext } from 'react'

const useDataBase = () => {
  const { VITE_REACT_APP_SERVER_URL } = import.meta.env

  const addColumns = async ({ columnTitle, taskIds }) => {
    const userID = window.localStorage.getItem("userID")
    return;

    try {
      const response = await fetch(`${VITE_REACT_APP_SERVER_URL}/columns/add/${userID}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ columnTitle, taskIds })
      })

      const data = await response.json()

    } catch (error) {
      console.error(error);
    }
  }

  return {
    addColumns
  };
}

export default useDataBase