import React, { useEffect } from 'react'
import App from './index'
import useUser from '../../../hooks/useUser'
import TaskList from '../../../components/TaskList'
import { Main } from '../../../ui/Main.styled'

const HomeMain = () => {
  const { checkUser } = useUser()

  useEffect(() => {
    checkUser()
  }, [])

  return (
    <>
      <Main>
        <App />
      </Main>
      <TaskList />
    </>
  )
}

export default HomeMain