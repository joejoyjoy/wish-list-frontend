import React from 'react'
import { Container } from '../../ui/Container.styled'
import HomeHeader from './Header/Header'
import HomeMain from './Main/Main'
import Sidebar from '../../components/Sidebar/sidebar'
import Backdrop from '../../components/Sidebar/backdrop'

const Home = () => {
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