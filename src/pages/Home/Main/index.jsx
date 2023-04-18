import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from '../../../db/initial-data';
import Column from '../../../components/column';
import { Container } from '../../../ui/DragDropContext.styled'

const App = () => {
  const [database, setDatabase] = useState(initialData)

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = database.columns[source.droppableId];
    const finish = database.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...database,
        columns: {
          ...database.columns,
          [newColumn.id]: newColumn,
        },
      };

      setDatabase(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...database,
      columns: {
        ...database.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setDatabase(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {database.columnOrder.map(columnId => {
          const column = database.columns[columnId];
          const tasks = column.taskIds.map(
            taskId => database.tasks[taskId],
          );
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
  );
}

export default App;