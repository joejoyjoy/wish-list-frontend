import React, { useEffect, useContext } from 'react';
import useTask from '../hooks/useTask'
import { TaskContext } from '../context/TasksProvider'
import TaskConfigure from './taskConfigure';
import styled from 'styled-components';
import { FaCheckCircle } from "react-icons/fa"
import { sidebarContext } from '../context/sidebarContext';
import { Button } from '../ui/Button';
import { Container, Title } from '../ui/Column.styled'
import { TaskContent, TaskStatus, NoTasks, TaskTitle, Date, Desc } from '../ui/TaskComponent.styled'

const TaskList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 100px;
  padding: 8px;
  border: 1px solid #5f5f5f;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.backgroundColorLightDark};
  transition: background-color 0.2s ease;
`;

const TaskContainer = styled.div`
  display: flex;
  border-radius: 6px;
  background-color: ${props => props.background};
  cursor: pointer;
`;

const Column = () => {
  const { toggleSidebar } = useContext(sidebarContext);
  const { tasks, setTasks, creatingTasks } = useContext(TaskContext)
  const { getTaskOfUser, changeTaskState } = useTask()

  const handleOnClick = (taskID, taskCurrentState) => {
    changeTaskState(taskID, !taskCurrentState)
  }

  useEffect(() => {
    getTaskOfUser().then(data => {
      setTasks(data)
    })
  }, [])

  return (
    <Container>
      <Title># All tasks</Title>
      <TaskList>
        {creatingTasks ? <TaskConfigure /> : null}
        {tasks ?
          tasks.slice(0).reverse().map(task => (
            <TaskContainer key={task._id} background={task.taskState ? "#f3f3ed" : "#CFFF47"} >
              <TaskStatus>
                <Button onClick={() => handleOnClick(task._id, task.taskState)}><FaCheckCircle fill={task.taskState ? "#419B45" : "gray"} /></Button>
              </TaskStatus>
              <TaskContent onClick={() => toggleSidebar(task._id)}>
                <TaskTitle>{task.taskTitle}</TaskTitle>
                <Date>{task.taskDate}</Date>
                <Desc>{task.taskDesc}</Desc>
              </TaskContent>

            </TaskContainer>
          )) : null}
        {tasks ?
          tasks.length == 0 && creatingTasks == false ?
            <NoTasks>
              There are no tasks yet!<br />
              Add one by the + button
            </NoTasks>
            : null
        :null}
      </TaskList>
    </Container>
  );
}

export default Column;