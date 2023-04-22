import React, { useEffect } from 'react'
import App from './index'
import useUser from '../../../hooks/useUser'
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
    </>
  )
}

export default HomeMain