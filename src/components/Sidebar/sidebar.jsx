import React, { useContext } from 'react'
import styled from 'styled-components';
import { sidebarContext } from '../../context/sidebarContext';
import { TfiClose } from "react-icons/tfi";

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColorDark};
  top: 0;
  right: 0;
  height: 100vh;
  width: 520px;
  transform: translateX(+100%);
  transition: all 0.4s;
  z-index: 30;

  &.sidebar--open {
    transform: translateX(0%);
  }
`;

const Section = styled.section`
  position: relative;
  height: 100%;
  overflow-y: auto;
`;

const Sidebar = () => {

  const { sidebar, toggleSidebar } = useContext(sidebarContext);

  return (
    <Container className={sidebar ? "sidebar--open" : ""}>
      <Section className="sidebar-container margin-bottom-0">
        <TfiClose className="icon pointer" size="1.7rem" onClick={toggleSidebar} />
        <h4 className="sidebar-title">My shopping cart</h4>
      </Section>
      <div className="sidebar-container margin-top-0">
        <div className="sidebar-container-flex">
          <button className="sidebar-btn-continue pointer" onClick={toggleSidebar}>CONTINUE SHOPPING</button>
        </div>
      </div>
    </Container>
  )
}

export default Sidebar