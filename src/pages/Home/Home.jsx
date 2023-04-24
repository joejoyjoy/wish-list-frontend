import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import HomeHeader from './Header/Header'
import HomeMain from './Main/Main'
import Sidebar from '../../components/Sidebar/sidebar'
import Backdrop from '../../components/Sidebar/backdrop'
import { Container, Loader, Loading, Dot } from '../../ui/Home.styled'

const Home = () => {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return (
      <Loader>
        <Loading>
          <Dot></Dot>
          <Dot></Dot>
          <Dot></Dot>
          <Dot></Dot>
          <Dot></Dot>
        </Loading>
      </Loader>
    )
  }

  return (
    <Container>
      <HomeHeader />
      <HomeMain />
      <Sidebar />
      <Backdrop />
    </Container>
  )
}

export default Home