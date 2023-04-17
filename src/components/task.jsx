import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Title, Date, Desc } from '../ui/TaskComponent.styled'

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? '#CFFF47' : 'antiquewhite')};
`;

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Title>{this.props.task.title}</Title>
            <Date>{this.props.task.date}</Date>
            <Desc>{this.props.task.desc}</Desc>
          </Container>
        )}
      </Draggable>
    );
  }
}
