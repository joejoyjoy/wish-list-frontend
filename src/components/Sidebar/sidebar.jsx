import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import useTask from '../../hooks/useTask';
import { TaskContext } from '../../context/TasksProvider';
import { sidebarContext } from '../../context/sidebarContext';
import { LocalTasksContext } from '../../context/localTasksProvider';
import GrayProfile from '../../assets/jpg/person-profile-gray.jpg'
import { Button, EditButton, DeleteButton, SaveButton } from '../../ui/Button';
import { Container, Header, Body, Footer, ProfileDetails } from '../../ui/Sidebar.styled'
import { TfiClose } from "react-icons/tfi";

const Sidebar = () => {
  const { user } = useAuth0()
  const { deleteTask, changeTaskValue } = useTask()
  const { sidebar, toggleSidebar, sidebarData } = useContext(sidebarContext);
  const { tasks, editingTasks, setEditingTasks } = useContext(TaskContext)
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
        toggleSidebar()
      } else {
        editTaskContent(taskIdChanged, taskTitleChanged, taskDescChanged)
        toggleSidebar()
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
      <div>
        <Header>
          {item().filter(task => task._id == sidebarData).map(item => (
            <input
              form="changeTaskForm"
              key={item._id}
              type="text"
              placeholder="Add a title"
              defaultValue={item.taskTitle}
              disabled={!editingTasks}
            ></input>
          ))}
          <div>
            <EditButton
              onClick={handleClick}
              editBtnBackground={editingTasks ? "#238636" : "#21262d"}
              editBtnHover={editingTasks ? "#2ea043" : "#30363d"}
              editBtnBorder={editingTasks ? "0" : "1px solid #f0f6fc19"}
            >
              {editingTasks ? "Undo" : "Edit"}
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
              <textarea form="changeTaskForm" defaultValue={item.taskDesc} disabled={!editingTasks} />
              <input form="changeTaskForm" type="hidden" value={item._id} />
            </Body>
          ))}
      </div>
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