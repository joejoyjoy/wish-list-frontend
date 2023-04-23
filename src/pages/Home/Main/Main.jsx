import React, { useEffect } from 'react'
import useUser from '../../../hooks/useUser'
import Column from '../../../components/column'
import { Main, Container } from '../../../ui/Main.styled'

const HomeMain = () => {
  const { checkUser } = useUser()

  useEffect(() => {
    checkUser()
  }, [])

  return (
    <>
      <Main>
        <Container>
          <Column />
        </Container>
      </Main>
    </>
  )
}

export default HomeMain