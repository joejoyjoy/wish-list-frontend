import React, { useEffect, useContext, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { TaskContext } from '../context/TasksProvider';
import { LocalTasksContext } from '../context/localTasksProvider';
import useTask from '../hooks/useTask';
import { useForm } from 'react-hook-form'
import styled from 'styled-components';
import { Section, Title, Date, Desc, Error } from '../ui/TaskConfigComponent.styled'
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
  const { user } = useAuth0()
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const { addTask, getTaskOfUser } = useTask()
  const { setTasks, setCreatingTasks } = useContext(TaskContext)
  const { addItem } = useContext(LocalTasksContext)

  const today = new window.Date().toLocaleDateString('en-En', { year: 'numeric', month: 'long', day: 'numeric' })

  const onSubmit = async (data) => {
    if (user) {
      await addTask(data)
      const tasks = await getTaskOfUser()
      setTasks(tasks)
      setCreatingTasks(false)
      reset()
    } else {
      const {taskTitle, taskDesc, taskDate} = data;
      addItem(taskTitle, taskDesc, taskDate)
      setCreatingTasks(false)
      reset()
    }
  }

  let popperRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (e.target.id !== "addTask" && !popperRef.current.contains(e.target)) {
        setCreatingTasks(false)
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }

  }, []);

  register("taskTitle")
  register("taskDate", { value: today })
  register("taskDesc")
  register("taskState", { value: false })

  return (
    <Form onSubmit={handleSubmit(onSubmit)} ref={popperRef}>
      <Section>
        <Title type="text" placeholder="Add a title" {...register("taskTitle", { required: true })} />
        <Button type="submit">
          <MdDone size="20px" />
        </Button>
      </Section>
      <Date>{today}</Date>
      <input {...register("taskDate")} type="hidden" />
      <input {...register("taskState")} type="hidden" />
      <Desc type="text" placeholder="Add a description" {...register("taskDesc", { required: true })} ></Desc>
      {(errors.taskDesc || errors.taskTitle) && <Error>This field is required</Error>}
    </Form>
  );
}

export default TaskConfigure;