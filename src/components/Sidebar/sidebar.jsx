import React, { useState, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import useTask from '../../hooks/useTask';
import { TaskContext } from '../../context/TasksProvider';
import { sidebarContext } from '../../context/sidebarContext';
import { LocalTasksContext } from '../../context/localTasksProvider';
import GrayProfile from '../../assets/jpg/person-profile-gray.jpg'
import styled from 'styled-components';
import { Button, EditButton, DeleteButton, SaveButton } from '../../ui/Button';
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

  & input {
    width: calc(100% - 130px);
    padding: 6px;
    background: none;
    border: 0;
    font-size: 19px;
    font-weight: 600;
    border: 1px solid #f0f6fc19;
    border-radius: 6px;
    outline: none;
    transition: all .2s ease-out;

    &:focus {
      border: 1px solid #2f81f7;
      box-shadow: #2f81f7 0px 0px 0px 1px inset;
    }

    &:disabled {
      border: 1px solid transparent;
      box-shadow: none;
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

const Body = styled.div`
  padding: 30px;
  border-bottom: 1px solid #21262d;
  background-color: #0d1117;

  & textarea {
    width: calc(100% - 25px);
    padding: 10px;
    background: none;
    resize: vertical;
    min-height: 120px;
    border: 1px solid #f0f6fc19;
    border-radius: 6px;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    transition: box-shadow .2s ease-out;

    &:focus {
      border: 1px solid #2f81f7;
      box-shadow: #2f81f7 0px 0px 0px 1px inset;
    }

    &:disabled {
      border: 1px solid transparent;
      box-shadow: none;
    }
  }
`;

const Footer = styled.section`
  padding: 30px;
  background-color: #161b22;
  border-bottom-left-radius: 12px;

  & div {
    display: flex;
    justify-content: right;
    gap: 20px;

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
  const { deleteTask, changeTaskValue } = useTask()
  const { sidebar, toggleSidebar, sidebarData } = useContext(sidebarContext);
  const { tasks, setTasks, editingTasks, setEditingTasks } = useContext(TaskContext)
  const { list, deleteItem, editTaskContent } = useContext(LocalTasksContext)

  const onDelete = async (id) => {
    if (user) {
      await deleteTask(id)
    } else {
      await deleteItem(id)
    }
  }

  const handleClick = () => {
    setEditingTasks((prevState) => !prevState)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTasks) {
      const taskIdChanged = e.target[2].value;
      const taskTitleChanged = e.target[0].value;
      const taskDescChanged = e.target[1].value;

      if (user) {
        changeTaskValue(taskIdChanged, taskTitleChanged, taskDescChanged)
      } else {
        editTaskContent(taskIdChanged, taskTitleChanged, taskDescChanged)
      }
    }
  }

  const item = () => {
    if (user) {
      return tasks;
    } else {
      return list
    }
  }

  return (
    <Container className={sidebar ? "sidebar--open" : ""}>
      {tasks ?
        <div>
          <Header>
            {item().filter(task => task._id == sidebarData).map(item => (
              editingTasks ?
                <input
                  form="changeTaskForm"
                  key={item._id}
                  type="text"
                  placeholder="Add a title"
                  defaultValue={item.taskTitle}
                ></input>
                : <input
                  key={item._id}
                  type="text"
                  placeholder="Add a title"
                  defaultValue={item.taskTitle}
                  disabled
                ></input>
            ))}
            <div>
              <EditButton
                onClick={handleClick}
                editBtnBackground={editingTasks ? "#238636" : "#21262d"}
                editBtnHover={editingTasks ? "#2ea043" : "#30363d"}
                editBtnBorder={editingTasks ? "0" : "1px solid #f0f6fc19"}
              >
                {editingTasks ? "Done" : "Edit"}
              </EditButton>
              <Button>
                <TfiClose className="icon pointer" size="1.7rem" onClick={toggleSidebar} />
              </Button>
            </div>
          </Header>
          {item()
            .filter(task => task._id == sidebarData)
            .map(item => (
              <Body key={item._id}>
                <ProfileDetails>
                  <img src={user ? user.picture : GrayProfile} alt={user ? user.name : 'User Avatar'} />
                  <span> {user ? user.given_name : 'User'}</span> on {item.taskDate}
                </ProfileDetails>
                {editingTasks ?
                  <>
                    <textarea form="changeTaskForm" defaultValue={item.taskDesc} />
                    <input form="changeTaskForm" type="hidden" value={item._id} />
                  </>
                  : <textarea disabled defaultValue={item.taskDesc} />}
              </Body>
            ))}
        </div>
        : null}
      <Footer>
        <div>
          <DeleteButton onClick={() => onDelete(sidebarData)}>DELETE TASK</DeleteButton>
          <form onSubmit={handleSubmit} id="changeTaskForm">
            <SaveButton
              form="changeTaskForm"
              type={editingTasks ? "submit" : "text"}
              saveBtnBackground={editingTasks ? "#11521e7a" : "#21262d"}
              saveBtnBorder={editingTasks ? "#00a11e" : "#f0f6fc19"}
              saveBtnBackgroundHover={editingTasks ? "#11521eb5" : "#21262d"}
              saveBtnBorderHover={editingTasks ? "#13bd35" : "#f0f6fc19"}
            >
              SAVE CHANGES
            </SaveButton>
          </form>
        </div>
      </Footer>

    </Container >
  )
}

export default Sidebar