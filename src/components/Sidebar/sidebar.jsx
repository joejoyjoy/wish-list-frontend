import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button, EditButton } from '../../ui/Button';
import { sidebarContext } from '../../context/sidebarContext';
import { TfiClose } from "react-icons/tfi";

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: column;
  top: 0;
  right: 0;
  height: 100vh;
  width: min(90%, 820px);
  background-color: ${({ theme }) => theme.backgroundColorDark};
  border-radius: 12px 0px 0px 12px;
  background-color: rgb(13, 17, 23);
  box-shadow: rgb(1, 4, 9) 0px 8px 24px;
  transform: translateX(+100%);
  transition: all 0.4s;
  z-index: 30;

  &.sidebar--open {
    transform: translateX(0%);
  }
`;

const Article = styled.article`
  margin: 30px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h4 {
    margin: 0;
    font-size: 24px;
    font-weight: 600;

    & b {
      font-size: 24px;
      color: ${({ theme }) => theme.colorInfo};
    }
  }

  & div {
    display: flex;
    gap: 15px;

    & svg {
      width: 16px;
      height: 16px;
  
      & path {
      color: ${({ theme }) => theme.colorInfo};
      }
    }
  }

`;

const Section = styled.section`
  margin-top: 10px;
`;

const Sidebar = () => {

  const { sidebar, toggleSidebar } = useContext(sidebarContext);

  return (
    <Container className={sidebar ? "sidebar--open" : ""}>
      <Article>
        <Header>
          <h4>Mobile responsive - Search page {<b>#12</b>}</h4>
          <div>
            <EditButton>
              Edit
            </EditButton>
            <Button>
              <TfiClose className="icon pointer" size="1.7rem" onClick={toggleSidebar} />
            </Button>
          </div>
        </Header>
        <Section className="sidebar-container margin-top-0">
          <div className="sidebar-container-flex">
            <Button className="sidebar-btn-continue pointer" onClick={toggleSidebar}>CONTINUE SHOPPING</Button>
          </div>
        </Section>
      </Article>
    </Container>
  )
}

export default Sidebar