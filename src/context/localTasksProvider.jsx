import React, { useState, useEffect, useContext, createContext } from 'react';
import { v4 } from 'uuid';
import { sidebarContext } from './sidebarContext';

export const LocalTasksContext = createContext()

const listFromLocalStorage = JSON.parse(localStorage.getItem("task-list") || '[]')

const LocalTasksProvider = ({ children }) => {
  const { toggleSidebar } = useContext(sidebarContext);
  const [list, setList] = useState(listFromLocalStorage);
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("task-list", JSON.stringify(list))
  }, [list])

  const addItem = (title, desc, date) => {
    const newItem = {
      _id: v4(),
      taskTitle: title,
      taskDesc: desc,
      taskDate: date,
      taskState: false,
    };

    setList([...list, newItem]);
  };

  const deleteItem = (id) => {
    const newList = list.filter((item) => item._id !== id);
    setList(newList);
    toggleSidebar(false)
  }

  const editTask = (id) => {

    const updatedList = list.map(list => {

      if (list.id === id) {
        return { ...list, isEditing: !list.isEditing }
      }
      return list;
    })

    setList(updatedList);
  }

  const editTaskContent = (id, title, desc) => {

    const editList = list.map(list => {
      if (list._id === id) {
        return {
          ...list,
          taskTitle: title,
          taskDesc: desc,
        }
      }
      return list;
    })

    setList(editList);
  }

  const handleSetComplete = (id) => {
    console.log("Got there", id);

    const updatedList = list.map(list => {
      if (list._id === id) {
        return { ...list, taskState: !list.taskState }
      }
      return list;
    })

    setList(updatedList);
    console.log(updatedList);
  }

  const value = { input, addItem, setInput, list, setList, deleteItem, handleSetComplete, editTask, editTaskContent }

  return (
    <LocalTasksContext.Provider value={value}>
      {children}
    </LocalTasksContext.Provider>
  )
}

export default LocalTasksProvider