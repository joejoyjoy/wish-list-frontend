import React, { useContext } from 'react'
import { sidebarContext } from '../../context/sidebarContext';
import { TaskContext } from '../../context/TasksProvider';
import { BackdropContainer } from '../../ui/Sidebar.styled'

const Backdrop = () => {
  const { sidebar, toggleSidebar } = useContext(sidebarContext);
  const { setEditingTasks } = useContext(TaskContext)

  const handleChange = () => {
    toggleSidebar()
    setEditingTasks(false)
  }

  return (
    <>
      <BackdropContainer className={sidebar ? "backdrop--open" : ""} onClick={() => handleChange()} ></BackdropContainer>
    </>
  )
}

export default Backdrop