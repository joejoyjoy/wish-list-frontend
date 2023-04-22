const initialData = {
     tasks: {
      'task-1': { 
        id: 'task-1', 
        title: 'This is the tasks 1 title',
        date: '4th Jan 2023',
        desc: 'Take out the garbage'
      },
      'task-2': { 
        id: 'task-2',
        title: 'This is the tasks 2 title',
        date: '14th Jan 2023',
        desc: 'Watch my favorite show' 
      },/*
      'task-3': { 
        id: 'task-3',
        title: 'This is the tasks 3 title',
        date: '9th Jan 2023',
        desc: 'Charge my phone' 
      },
      'task-4': { 
        id: 'task-4',
        title: 'This is the tasks 4 title',
        date: '23th Jan 2023',
        desc: 'Cook dinner' 
      },*/
    }, 
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2'], // taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    }
    ,
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  },
};

export default initialData;
