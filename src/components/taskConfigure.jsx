import React, { useContext } from 'react';
import { TaskContext } from '../context/TasksProvider';
import useTask from '../hooks/useTask';
import { useForm } from 'react-hook-form'
import styled from 'styled-components';
import { Section, Title, Date, Desc } from '../ui/TaskConfigComponent.styled'
import { Button } from '../ui/Button'
import { MdDone } from "react-icons/md";

const Form = styled.form`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: aliceblue;
`;

const TaskConfigure = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const { addTask, getTaskOfUser } = useTask()
  const { setTasks} = useContext(TaskContext)

  const onSubmit = async (data) => {
    await addTask(data)
    const tasks = await getTaskOfUser()
    setTasks(tasks)
    reset()
  }

  register("taskTitle", { value: "This is the tasks config title" })
  register("taskDesc", { value: "Take out the garbage It getting far" })

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Section>
        <Title type="text" placeholder="Add a title" {...register("taskTitle", { required: true })} />
        <Button type="submit">
          <MdDone size="20px" />
        </Button>
      </Section>
      <Date>4th Jan 2023</Date>
      <Desc type="text" placeholder="Add a description" {...register("taskDesc", { required: true })} ></Desc>
      {(errors.taskDesc || errors.taskTitle) && <span>This field is required</span>}
    </Form>
  );
}

export default TaskConfigure;