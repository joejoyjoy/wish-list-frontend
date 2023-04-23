import React, { useContext } from 'react'
import { sidebarContext } from '../../context/sidebarContext';
import { BackdropContainer } from '../../ui/Sidebar.styled'

const Backdrop = () => {
  const { sidebar, toggleSidebar } = useContext(sidebarContext);

  return (
    <>
      <BackdropContainer className={sidebar ? "backdrop--open" : ""} onClick={toggleSidebar} ></BackdropContainer>
    </>
  )
}

export default Backdrop