import React, { useContext } from 'react';
import useTask from '../../hooks/useTask';
import styled from 'styled-components';
import GrayProfile from '../../assets/jpg/person-profile-gray.jpg'
import { useAuth0 } from '@auth0/auth0-react';
import { Button, EditButton, DeleteButton } from '../../ui/Button';
import { sidebarContext } from '../../context/sidebarContext';
import { TaskContext } from '../../context/TasksProvider';
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
  width: min(90%, 520px);
  background-color: ${({ theme }) => theme.backgroundColorLightDark};
  border-radius: 12px 0px 0px 12px;
  background-color: #161b22;
  box-shadow: #010409 0px 8px 24px;
  transform: translateX(+100%);
  transition: all 0.4s;
  z-index: 30;

  &.sidebar--open {
    transform: translateX(0%);
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid #21262d;
  border-top-left-radius: 12px;
  background-color: #0d1117;

  & h4 {
    margin: 0;
    margin-right: 20px;
    font-size: 24px;
    font-weight: 600;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
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

const Body = styled.div`
  padding: 30px;
  border-bottom: 1px solid #21262d;
  background-color: #0d1117;
`;

const Footer = styled.section`
  padding: 30px;
  background-color: #161b22;
  & button {
    float: right;
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 0.4rem 0;
  color: ${({ theme }) => theme.colorInfo};

  img {
    object-fit: cover;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

const Sidebar = () => {
  const { user } = useAuth0()
  const { deleteTask } = useTask()
  const { sidebar, toggleSidebar, sidebarData } = useContext(sidebarContext);
  const { tasks, setTasks } = useContext(TaskContext)

  const onDelete = async (id) => {
    await deleteTask(id)
  }

  return (
    <Container className={sidebar ? "sidebar--open" : ""}>
      <div>
        <Header>
          {tasks ? tasks.filter(task => task._id == sidebarData).map(item => (
            <h4 key={item._id}>{item.taskTitle}</h4>
          )) : null}
          <div>
            <EditButton>
              Edit
            </EditButton>
            <Button>
              <TfiClose className="icon pointer" size="1.7rem" onClick={toggleSidebar} />
            </Button>
          </div>
        </Header>
        <Body>
          {tasks ? tasks
            .filter(task => task._id == sidebarData)
            .map(item => (
              <div key={item._id}>
                <ProfileDetails>
                  <img src={user ? user.picture : GrayProfile} alt={user ? user.name : 'User Avatar'} />
                  <span> {user ? user.given_name : 'User'}</span> on {item.taskDate}
                </ProfileDetails>
                <a>{item.taskDesc}</a>
              </div>
            ))
            : null}
        </Body>
      </div>
      <Footer className="sidebar-container margin-top-0">
        <div className="sidebar-container-flex">
          <DeleteButton className="sidebar-btn-continue pointer" onClick={() => onDelete(sidebarData)}>DELETE TASK</DeleteButton>
        </div>
      </Footer>

    </Container >
  )
}

export default Sidebar