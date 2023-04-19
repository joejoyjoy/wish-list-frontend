import React, { useContext } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { sidebarContext } from '../context/sidebarContext';
import { Title, Date, Desc } from '../ui/TaskComponent.styled'

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? '#CFFF47' : 'antiquewhite')};
`;

const Task = ({ task, index }) => {
  const { toggleSidebar } = useContext(sidebarContext);

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Title onClick={toggleSidebar}>{task.title}</Title>
          <Date onClick={toggleSidebar}>{task.date}</Date>
          <Desc onClick={toggleSidebar}>{task.desc}</Desc>
        </Container>
      )}
    </Draggable>
  );
}

export default Task;