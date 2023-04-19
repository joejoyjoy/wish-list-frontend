import React, { useContext } from 'react'
import styled from 'styled-components';
import { sidebarContext } from '../../context/sidebarContext';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 10;

  &.backdrop--open {
    display: block;
  }
`;

const Backdrop = () => {
  const { sidebar, toggleSidebar } = useContext(sidebarContext);

  return (
    <>
      <Container className={sidebar ? "backdrop--open" : ""} onClick={toggleSidebar} ></Container>
    </>
  )
}

export default Backdrop